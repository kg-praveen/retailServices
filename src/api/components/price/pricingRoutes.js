var express = require("express");
var pricingRouter = express.Router();
const pricingService = require("./pricingService");
const STATUS_404 = 404;
const STATUS_200 = 200;

// define get price route
pricingRouter.get("/product-price/:productId",  (req, res) => {
  let productId = req.params.productId;

  //validate product id
  if (parseInt(productId) != productId) {
    res.status(STATUS_404).send({
      error_code: "ERROR_NOT_FOUND",
      error_message: "Prouct Not Found",
    });
    return;
  }

  res.status(STATUS_200).send(pricingService.fetchItemPrice(productId));
});

module.exports = pricingRouter;
