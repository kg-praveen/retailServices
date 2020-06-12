const itemPrice1 = {
    product_id: 1386042,
    current_price: 10,
    currency: "USD"
}

const itemPrice2 = {
    product_id: 15117729,
    current_price: 20,
    currency: "USD"
}

const itemPrice3 = {
    product_id: 16483589,
    current_price: 30,
    currency: "USD"
}

const itemPrice4 = {
    product_id: 16696652,
    current_price: 30,
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