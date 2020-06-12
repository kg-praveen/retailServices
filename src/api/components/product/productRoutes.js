/**
 * This layer will have routing logic
 */

var express = require("express");
const https = require("https");
var productRouter = express.Router();

// define product aggregator route
productRouter.get("/product-aggregator", (req, res) => {
  let productId = req.params.productId;

  // if (parseInt(productId) != productId) {
  // res.status('404')
  // .send({
  // errorCode: 'ERROR_NOT_FOUND',
  // erroMessage: 'Prouct Not Found'});
  // return;
  // }
  Promise.all([getProductName(), getProductPrice()]).then((data) => {
    console.log(data);
    res.send(`Testing product API`);
  });
});

//make API call to get the product name
const getProductName = () => {
  let body = "";
  const product_id = "13860428";
  let url =
    "https://redsky.target.com/v2/pdp/tcin/" +
    product_id +
    "?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics,available_to_promise_network,deep_red_labels,esp";

  //move this to service layer - it is business logic
  const productName = new Promise((resolve, reject) => {
    https.get(url, (res) => {
      res.on("data", (data) => {
        body += data;
      });
      res.on("end", () => {
        body = JSON.parse(body);
        console.log("response", body);
        resolve(body);
      });
    });
  });
  return productName;
};

//move this to service layer - it is business logic
const getProductPrice = () => {
  const productPrice = new Promise((resolve, reject) => {
    console.log("***** product price");
    resolve("product price");
  });
  return productPrice;
};



module.exports = productRouter;
