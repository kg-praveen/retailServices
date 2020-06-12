require("dotenv").config();
const express = require("express");
const router = require("./src/api/components/product/routes")
const app = express();
const API_VERSION = 'v1';
const API_SUFFIX = 'browse';

//set router
app.use(`${API_SUFFIX}/${API_VERSION}`,router);

console.log(router);

// define product aggregator route
router.get('/product-aggregator', function (req, res) {
    console.log("this is router: " + router);
    res.send('Testing product API from app')
  })

//starting server on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });