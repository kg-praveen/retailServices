/**
 * Basic UTIL class
 * 
 */
const STATUS_200 = 200;
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
      status: STATUS_200,
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
      response: errorInfo.error
    };
    return errorResponse;
  }

  /**
   * Builds the error object
   * @param {response code} status 
   * @param {short string error code} errorCode 
   * @param {error message limited} errorMessage 
   */
  function constructError(status, errorCode, errorMessage) {
   return {
        status: status,
        error: {
          error_code: errorCode,
          error_message: errorMessage,
        }
      };
  }

  module.exports = {
    constructErrorResponse,
    constructSuccessJSONResponse,
    constructError
  };