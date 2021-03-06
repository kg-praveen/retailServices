/**
 * This is server code and only server related activities
 */

require("dotenv").config();
const express = require("express");
const productRouter = require("./src/api/components/product/productRoutes");
const pricingRouter = require("./src/api/components/price/pricingRoutes");
const app = express();
app.use(express.json());


//set router
app.use(`\/${process.env.PRODUCT_API_SUFFIX}\/${process.env.API_VERSION}`,productRouter);
app.use(`\/${process.env.PRICE_API_SUFFIX}\/${process.env.API_VERSION}`,pricingRouter);

//starting server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App started on port  ${PORT}`);
    
  });

module.exports = app;


