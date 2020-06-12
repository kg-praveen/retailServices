/**
 * This layer will have the business logic.
 * Controller/Route later will talk to this.
 * This will eventaully make API calls or retrieve data from datastore
 */
const https = require("https");
const { listenerCount } = require("../../../../app");
const priceModel = require("../price/priceModel");
const { log } = require("console");
const productUtils = require("./productUtils");

async function aggregateProductInfo(productId) {
  /**
   * productinfo object will hold
   * 1) productData
   * 2) price data
   * 3) responseCode/status
   */
  let productInfo = {};
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
  productInfo.productId = productId;
  productInfo.productData = productData;
  productInfo.priceData = priceData;
  return productUtils.constructSuccessJSONResponse(productInfo);
}

const getProductName = (productId) => {
  let body = "";
  let url =
    "https://redsky.target.com/v2/pdp/tcin/" +
    productId +
    "?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics,available_to_promise_network,deep_red_labels,esp";

  const productName = new Promise((resolve, reject) => {
    https.get(url, (res) => {
      res.on("data", (data) => {
        body += data;
      });
      res.on("end", () => {
        try {
          body = JSON.parse(body);

          if (typeof body.product.item.product_description == "undefined") {
            reject({
              status: 404,
              error: {
                error_code: "NAME_NOT_FOUND",
                error_message: "Name information is missing",
              },
            });
          } else {
            resolve(body.product.item);
          }
        } catch (e) {
          reject({
            status: 500,
            error: {
              error_code: "SYSTEM_ERROR",
              error_message: "Something went wrong, please try again",
            },
          });
        }
      });
    }).on("error", (e) => {
        console.error(e);
        reject({
            status: 500,
            error: {
              error_code: "SYSTEM_ERROR",
              error_message: "Something went wrong, please try again",
            },
          });
    });
  });
  
  return productName;
};

const getProductPrice = (productId) => {
  const productPrice = new Promise((resolve, reject) => {
    console.log("***** product price");
    //retrieve the price from pricing model
    const priceInfo = {
      current_price: 10,
      currency: "USD",
    };
    setTimeout(() => {
      priceDate = priceModel.findItemPrice(productId);
      resolve(priceDate);
    }, 500);
  });
  return productPrice;
};

module.exports = {
  getProductName,
  getProductPrice,
  aggregateProductInfo,
};
