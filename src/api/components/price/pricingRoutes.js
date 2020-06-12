var express = require('express');
var pricingRouter = express.Router();

// define product aggregator route
pricingRouter.get('/product-price', function (req, res) {
  res.send('Testing price API updated')
})


module.exports = pricingRouter;