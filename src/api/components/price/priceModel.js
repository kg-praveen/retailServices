const { map } = require("../../../../app")

//consider this as temporary data store for product price
const PRICE_DB = new Map();

PRICE_DB.set(13860428, {
    product_id: 13860428,
    current_price: new Number(20.10).toFixed(2),
    currency: "USD"
});

PRICE_DB.set(13860427, {
    product_id: 13860427,
    current_price: new Number(10.00).toFixed(2),
    currency: "USD"
});

PRICE_DB.set(13860425,{
    product_id: 13860425,
    current_price: new Number(99.99).toFixed(2),
    currency: "USD"
});

const findItemPrice = (productId) => {
    
    if(PRICE_DB.has(parseInt(productId))) {
        return PRICE_DB.get(parseInt(productId));
    } else {
        return {
            status: 404,
            error: {
              error_code: "PRODUCT_PRICE_NOT_FOUND",
              error_message: "Product price information is missing"
            }
          };
    }
};

module.exports = {
    findItemPrice
  };