/**
 * This layer will have routing logic
 */
var express = require("express");
var productRouter = express.Router();
const service = require("./productService");

// define product aggregator route and invoke service layer
productRouter.get("/product-aggregator/:productId", async (req, res) => {
  let productId = req.params.productId;
  const productResponse = await service.aggregateProductInfo(productId);
  res.status(productResponse.status).send(productResponse.response);
  return;
});

module.exports = productRouter;
