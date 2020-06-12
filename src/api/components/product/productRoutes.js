/**
 * This layer will have routing logic
 */
var express = require("express");
var productRouter = express.Router();
const service = require("./productService");

// define product aggregator route
productRouter.get("/product-aggregator/:productId", async (req, res) => {
  let productId = req.params.productId;

  //need to move this validation to service/util layer as well
  if (parseInt(productId) != productId) {
    res.status("404").send({
      error_code: "ERROR_NOT_FOUND",
      error_message: "Prouct Not Found",
    });
    return;
  }

  const productResponse = await service.aggregateProductInfo(productId);
  res.status(productResponse.status).send(productResponse.response);
  return;
});

module.exports = productRouter;
