/**
 * This layer will have the business logic.
 * Controller/Route later will talk to this.
 * This will eventaully make API calls or retrieve data from datastore
 */
const https = require("https");

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
          body = JSON.parse(body);
          resolve(body);
        });
      });
    });
    return productName;
};

const getProductPrice = () => {
    const productPrice = new Promise((resolve, reject) => {
      console.log("***** product price");
      resolve("product price");
    });
    return productPrice;
};

module.exports = {
    getProductName,
    getProductPrice,
}