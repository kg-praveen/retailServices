//service layer for price domain. gets price from model or datastore
const priceModel = require("./priceModel");

const fetchItemPrice = (productId) => priceModel.findItemPrice(productId);

module.exports = { fetchItemPrice };