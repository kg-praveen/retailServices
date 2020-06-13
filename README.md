# retailServices
Provides services for retail operations

## Unit Test and Code Coverage
Command: `npm test`
OutPut:

API
    GET Product Info
        Product data retrieved sucessfully. Resolving promise...
        Pricing data retrieved sucessfully. Resolving promise...
        Required product and price data retrieved successfuly. Building response...
          ✓ data (530ms)
          ✓ data
          ✓ data (380ms)
    GET Price Info
          ✓ data
          ✓ data
          1) data
  5 passing (931ms)
  1 failing

  1) API
       GET Price Info
         data:

      Uncaught AssertionError: expected { Object (_events, _eventsCount, ...) } to have status code 404 but got 200
      + expected - actual

      -200
      +404
      
      at /Users/prakanda/assessment/myretail-target/test/task.js:63:34
      at Test.Request.callback (node_modules/superagent/lib/node/index.js:716:12)
      at IncomingMessage.<anonymous> (node_modules/superagent/lib/node/index.js:916:18)
      at endReadableNT (_stream_readable.js:1187:12)
      at processTicksAndRejections (internal/process/task_queues.js:84:21)



--------------------------------------------|---------|----------|---------|---------|-------------------
File                                        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------------------------------------|---------|----------|---------|---------|-------------------
All files                                   |      92 |    73.33 |   90.48 |   91.92 |                   
 myretail-target                            |     100 |      100 |     100 |     100 |                   
  app.js                                    |     100 |      100 |     100 |     100 |                   
 myretail-target/src/api/components/price   |   89.29 |    57.14 |     100 |   88.89 |                   
  priceModel.js                             |      75 |       40 |     100 |      75 | 32-36             
  pricingRoutes.js                          |     100 |      100 |     100 |     100 |                   
  pricingService.js                         |     100 |      100 |     100 |     100 |                   
 myretail-target/src/api/components/product |   91.94 |     87.5 |   88.24 |   91.94 |                   
  productRoutes.js                          |     100 |      100 |     100 |     100 |                   
  productService.js                         |   89.13 |     87.5 |   84.62 |   89.13 | 47,51,96-108      
  productUtils.js                           |     100 |      100 |     100 |     100 |                   
--------------------------------------------|---------|----------|---------|---------|-------------------
