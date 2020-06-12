/**
 * This layer will have routing logic
 */
var express = require("express");
var productRouter = express.Router();
const service = require("./productService");
const STATUS_404 = 404;

// define product aggregator route
productRouter.get("/product-aggregator/:productId", async (req, res) => {
  let productId = req.params.productId;
  const productResponse = await service.aggregateProductInfo(productId);
  res.status(productResponse.status).send(productResponse.response);
  return;
});

module.exports = productRouter;
