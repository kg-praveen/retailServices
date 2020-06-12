/**
 * This layer will have the business logic.
 * Controller/Route later will talk to this.
 * This will eventaully make API calls or retrieve data from datastore
 */
const https = require("https");
const { listenerCount } = require("../../../../app");
const priceModel = require("../price/priceModel");

async function aggregateProductInfo(productId) {
  let productInfo = {};

  let [productData, priceData] = await Promise.all([
    getProductName(productId),
    getProductPrice(productId),
  ]);

  if (typeof productData.error == "string") {
    productInfo.status = 404;
    productInfo.data = "product not found";

    return productInfo;
  } // if an error exists

  //now need to construct the JSON
  return priceData;
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
            reject(new Error("item name not found"));
          } else {
            resolve(body.product.item);
          }
        } catch (e) {
          reject(new Error(e.message));
        }
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
