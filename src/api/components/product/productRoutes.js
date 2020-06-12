var express = require("express");
var productRouter = express.Router();

// define product aggregator route
productRouter.get("/product-aggregator/:product_id", function (req, res) {
  let product_id = req.params.product_id;

  if (parseInt(product_id) != product_id) {
    res
      .status("404")
      .send({ error: "Product Id: " + product_id + " is not a valid id." });
    return;
  } // input validation -- makes sure the input product_id string is equivalent to an integer

  res
    .status("200")
    .send({ product_id: product_id, product_name: "LG 55 inch TV" });
});

module.exports = productRouter;
