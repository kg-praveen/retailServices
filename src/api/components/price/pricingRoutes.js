var express = require('express');
var pricingRouter = express.Router();
const pricingService = require("./pricingService")

// define product aggregator route
pricingRouter.get('/product-price/:productId', function (req, res) {
    let productId = req.params.productId;
  res.send(pricingService.fetchItemPrice(productId));

});

module.exports = pricingRouter;

