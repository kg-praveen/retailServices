/**
 * This layer will have the business logic.
 * Controller/Route later will talk to this.
 * This will eventaully make API calls or retrieve data from datastore
 */
const https = require("https");
const { listenerCount } = require("../../../../app");

async function aggregateProductInfo(productId){
    let [productData, priceData] = await Promise.all([getProductName(productId), getProductPrice()]);
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

const getProductPrice = () => {
  const productPrice = new Promise((resolve, reject) => {
    console.log("***** product price");
    //retrieve the price from pricing model
    const priceInfo = {
        current_price: 10,
        currency: "USD"
    }
    setTimeout(() => {
        resolve(priceInfo);
    }, 500)
    
  });
  return productPrice;
};

module.exports = {
  getProductName,
  getProductPrice,
  aggregateProductInfo
};
