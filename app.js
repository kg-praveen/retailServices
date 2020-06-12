/**
 * This is considered server and only server related activities
 */

require("dotenv").config();
const express = require("express");
const productRouter = require("./src/api/components/product/productRoutes");
const pricingRouter = require("./src/api/components/price/pricingRoutes");
const app = express();

//set router
app.use(`\/${process.env.PRODUCT_API_SUFFIX}\/${process.env.API_VERSION}`,productRouter);
app.use(`\/${process.env.PRICE_API_SUFFIX}\/${process.env.API_VERSION}`,pricingRouter);

//starting server
app.listen(process.env.SERVER_PORT, () => {
    console.log("Server is running");
  });

module.exports = app;


