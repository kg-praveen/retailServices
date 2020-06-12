/**
 * This is considered server and only server related activities
 */

require("dotenv").config();
const express = require("express");
const productRouter = require("./src/api/components/product/productRoutes");
const pricingRouter = require("./src/api/components/price/pricingRoutes");
const app = express();
const API_VERSION = 'v1';
const API_SUFFIX = 'browse';
const PRICE_API_SUFFIX = 'price';

//set router
app.use(`\/${API_SUFFIX}\/${API_VERSION}`,productRouter);
app.use(`\/${PRICE_API_SUFFIX}\/${API_VERSION}`,pricingRouter);


//starting server on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });

module.exports = app;


