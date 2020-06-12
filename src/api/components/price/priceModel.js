//consider this as temporary data store for product price

const itemPrice1 = {
    product_id: 13860428,
    current_price: new Number(20.10).toFixed(2),
    currency: "USD"
}

const itemPrice2 = {
    product_id: 15117729,
    current_price: new Number(20.10).toFixed(2),
    currency: "USD"
}

const itemPrice3 = {
    product_id: 16483589,
    current_price: new Number(20.10).toFixed(2),
    currency: "USD"
}

const itemPrice4 = {
    product_id: 16696652,
    current_price: new Number(20.10).toFixed(2),
    currency: "USD"
}

const findItemPrice = (productId) => {
    switch(productId) {
        case "13860428" :
            return itemPrice1;
        case "15117729" :
            return itemPrice2;
        case "16483589" :
            return  itemPrice3;
        case "16696652" :
            return itemPrice4;
        default :
            return "item not found";
    }
};

module.exports = {
    findItemPrice
  };