/**
 * Basic UTIL class
 * 
 */

/**
 * constructs success JSON
 * @param {holds successrespone of product and price info} productInfo 
 */
function constructSuccessJSONResponse(productInfo) {
    //1) retireve data from product object
    //2) retireve data from price object
    //3) Error response?
    //4) How to send back status and response ?
    let aggregatedResponse = {
      status: 200,
      response: {
        product: {
          product_id: productInfo.productId,
          item: {
            product_description: {
              title: productInfo.productData.product_description.title,
            },
          },
          price: {
            current_price: productInfo.priceData.current_price,
            currency: productInfo.priceData.currency,
          },
        },
      },
    };
    return aggregatedResponse;
  }
  
  /**
   * constructs error JSON response
   * @param {holds error information} errorInfo 
   */
  function constructErrorResponse(errorInfo) {
    let errorResponse = {
      status: errorInfo.status,
      response: errorInfo.error,
    };
    return errorResponse;
  }

  module.exports = {
    constructErrorResponse,
    constructSuccessJSONResponse
  };