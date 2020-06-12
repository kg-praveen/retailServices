/**
 * Service layer will have the business logic.
 * Controller/Route later will talk to this.
 * This will eventaully make API calls or retrieve data from datastore
 */
const https = require("https");
const http = require("http");
const productUtils = require("./productUtils");
const STATUS_404 = 404;
const STATUS_500 = 500;

/**
 * This function:
 * 1) Validates input
 * 2) Retrieves product name from another API
 * 3) Retrieves pricing data from pricing API
 * 4) Aggregates the results from above 2 APIs
 * 
 * @param {product id} productId 
 */
async function aggregateProductInfo(productId) {
  
  //validate input
  if (parseInt(productId) != productId) {
    return {
      status: STATUS_404,
      response: {
        error_code: "ERROR_NOT_FOUND",
        error_message: "Prouct Not Found",
      },
    };
  }

  let errorInfo = {};

  //fetch product information
  let productData = await getProductName(productId).catch((error) => {
    errorInfo = error;
  });

  if (!productData) {
    return productUtils.constructErrorResponse(errorInfo);
  }

  //fetch pricing information
  let priceData = await getProductPrice(productId).catch((error) => {
    errorInfo = error;
  });

  if (!priceData) {
    return productUtils.constructErrorResponse(errorInfo);
  }

  //build product info object
  let productInfo = {
    productId: productId,
    productData: productData,
    priceData: priceData,
  };
  console.log("Required product and price data retrieved successfuly. Building response...");
  return productUtils.constructSuccessJSONResponse(productInfo);
}

/**
 * Retrived product name from internal catalog API.
 * @param {product_id} productId
 * @todo implement hystrix, timeout
 */
const getProductName = (productId) => {
  let body = "";
  let url = `https://redsky.target.com/v2/pdp/tcin/${productId}?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics,available_to_promise_network,deep_red_labels,esp`;

  const productName = new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        res.on("data", (data) => {
          body += data;
        });
        res.on("end", () => {
          try {
            body = JSON.parse(body);

            if (typeof body.product.item.product_description == "undefined") {
              reject(
                productUtils.constructError(
                  STATUS_404,
                  "NAME_NOT_FOUND",
                  "Name information is missing"
                )
              );
            } else {
              console.log("Product data retrieved sucessfully. Resolving promise...");  
              resolve(body.product.item);
            }
          } catch (e) {
            reject(
              productUtils.constructError(
                STATUS_500,
                "SYSTEM_ERROR",
                "Oops, something went wrong, please try again"
              )
            );
          }
        });
      })
      .on("error", (e) => {
        console.error(e);
        reject(
          productUtils.constructError(
            STATUS_500,
            "SYSTEM_ERROR",
            "Oops, something went wrong, please try again"
          )
        );
      });
  });

  return productName;
};

/**
 * Gets price for a given productId
 * @param {product_id} productId
 */
const getProductPrice = (productId) => {
  const productPrice = new Promise((resolve, reject) => {
    http.get(
      `http://localhost:3000/price/v1/product-price/${productId}`,
      (res) => {
        res.on("data", (data) => {
          body = JSON.parse(data);
          console.log("Pricing data retrieved sucessfully. Resolving promise...");
          resolve(body);
        });
      }
    );
  });
  return productPrice;
};

module.exports = {
  getProductName,
  getProductPrice,
  aggregateProductInfo,
};