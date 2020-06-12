var express = require('express');
var productRouter = express.Router();

// define product aggregator route
productRouter.get('/product-aggregator', function (req, res) {
  res.send('Testing product API updated1')
})




module.exports = productRouter;