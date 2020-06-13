# retailServices
Provides services for retail operations
Tools used
API supported

## How to install and run the app
### Download code
1) Create a folder in your system where you want the app to run

2) Initialize GIT report using command 'git init' would generate an similar outpuse like:
...
Initialized empty Git repository in <your dir location>
...

3) Clone the repository using command 'git clone <url>' - copy the URL from github clone/download location. 
would generate an similar outpuse like:
...
Cloning into 'retailServices'...
remote: Enumerating objects: 260, done.
remote: Counting objects: 100% (260/260), done.
remote: Compressing objects: 100% (159/159), done.
remote: Total 260 (delta 101), reused 186 (delta 44), pack-reused 0
Receiving objects: 100% (260/260), 70.24 KiB | 368.00 KiB/s, done.
Resolving deltas: 100% (101/101), done.
...
4) Navigate to the created app folder

## Supported API methods

## How to interact with APIs

## Unit Test and Code Coverage Report
command: `npm test`
> outPut:
```
 API
    GET Product Info
Product data retrieved sucessfully. Resolving promise...
Pricing data retrieved sucessfully. Resolving promise...
Required product and price data retrieved successfuly. Building response...
      ✓ GET valid product (535ms)
Product data retrieved sucessfully. Resolving promise...
Pricing data retrieved sucessfully. Resolving promise...
Required product and price data retrieved successfuly. Building response...
      ✓ GET valid product (363ms)
Product data retrieved sucessfully. Resolving promise...
Pricing data retrieved sucessfully. Resolving promise...
Required product and price data retrieved successfuly. Building response...
      ✓ GET valid product (385ms)
      ✓ GET product with invalid id
      ✓ GET product with non-existing id (327ms)
Product data retrieved sucessfully. Resolving promise...
      ✓ GET product for item without price record (406ms)
    GET Price Info
      ✓ GET price for valid product
      ✓ GET price for invalid product id
      1) GET price for non-existing product id


  8 passing (2s)
  1 failing

  1) API
       GET Price Info
         GET price for non-existing product id:

      Uncaught AssertionError: expected { Object (_events, _eventsCount, ...) } to have status code 404 but got 200
      + expected - actual

      -200
      +404
      
      at /Users/prakanda/assessment/myretail-target/test/app.test.js:127:32
      at Test.Request.callback (node_modules/superagent/lib/node/index.js:716:12)
      at /Users/prakanda/assessment/myretail-target/node_modules/superagent/lib/node/index.js:916:18
      at IncomingMessage.<anonymous> (node_modules/superagent/lib/node/parsers/json.js:19:7)
      at endReadableNT (_stream_readable.js:1187:12)
      at processTicksAndRejections (internal/process/task_queues.js:84:21)



--------------------------------------------|---------|----------|---------|---------|-------------------
File                                        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------------------------------------|---------|----------|---------|---------|-------------------
All files                                   |   97.06 |    93.75 |   95.24 |   97.03 |                   
 myretail-target                            |     100 |       50 |     100 |     100 |                   
  app.js                                    |     100 |       50 |     100 |     100 | 18                
 myretail-target/src/api/components/price   |     100 |      100 |     100 |     100 |                   
  priceModel.js                             |     100 |      100 |     100 |     100 |                   
  pricingRoutes.js                          |     100 |      100 |     100 |     100 |                   
  pricingService.js                         |     100 |      100 |     100 |     100 |                   
 myretail-target/src/api/components/product |   95.31 |      100 |   94.12 |   95.31 |                   
  productRoutes.js                          |     100 |      100 |     100 |     100 |                   
  productService.js                         |   93.88 |      100 |   92.31 |   93.88 | 100-112           
  productUtils.js                           |     100 |      100 |     100 |     100 |                   
--------------------------------------------|---------|----------|---------|---------|-------------------
npm ERR! Test failed.  See above for more details.
```
