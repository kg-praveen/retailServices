var express = require("express");
var pricingRouter = express.Router();
const pricingService = require("./pricingService");
const STATUS_400 = 400;
const STATUS_200 = 200;

// define get price route
pricingRouter.get("/product-price/:productId",  (req, res) => {
  let productId = req.params.productId;

  //validate product id
  if (parseInt(productId) != productId) {
    res.status(STATUS_400).json({
      error_code: "INVALID_PRODUCTID",
        error_message: "ProuctID is not valid",
    });
    return;
  }

  res.status(STATUS_200).json(pricingService.fetchItemPrice(productId));
});

module.exports = pricingRouter;
