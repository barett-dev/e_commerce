const Cart = require('../models/cart');
//const cartDto = require('../dto/cart')
const productsDao = require('../dao/products.dao');

const find = async (id) => {
    try {
        const product = await productsDao.findProduct(id)
        return product

    } catch (error) {
        console.log('error dao')
    }
}

const saveItem = (item) => {
    cartItem = new Cart(item)
    console.log(cartItem)
    cartItem.save()
    return cartItem   
}

module.exports = {
    find,
    saveItem
}