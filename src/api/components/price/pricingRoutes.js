var express = require("express");
var pricingRouter = express.Router();
const pricingService = require("./pricingService");
const STATUS_404 = 404;

// define product aggregator route
pricingRouter.get("/product-price/:productId", function (req, res) {
  let productId = req.params.productId;

  //need to move this validation to service/util layer as well
  if (parseInt(productId) != productId) {
    res.status(STATUS_404).send({
      error_code: "ERROR_NOT_FOUND",
      error_message: "Prouct Not Found",
    });
    return;
  }

  res.send(pricingService.fetchItemPrice(productId));
});

module.exports = pricingRouter;
