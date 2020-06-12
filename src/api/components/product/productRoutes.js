/**
 * This layer will have routing logic
 */

var express = require("express");
var productRouter = express.Router();
const service = require('./productService');
// define product aggregator route
productRouter.get("/product-aggregator/:productId", async (req, res) => {
  let productId = req.params.productId;
  if (parseInt(productId) != productId) {
    res.status('404')
    .send({
    errorCode: 'ERROR_NOT_FOUND',
    erroMessage: 'Prouct Not Found'});
    return;
  }
  
  const data = await service.aggregateProductInfo(productId);
  res.send(data);

});


module.exports = productRouter;
