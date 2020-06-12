var express = require('express');
var router = express.Router();

// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//     console.log("fron router");
    
//   console.log('Time: ', Date.now())
//   next()
// })

// define product aggregator route
router.get('/product-aggregator', function (req, res) {
  res.send('Testing product API updated1')
})




module.exports = router