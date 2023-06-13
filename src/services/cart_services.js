const cartDao = require('../dao/cart.dao')
const cartDto = require('../dto/cart')
const add = async (id) => {
    try {
        const product = await cartDao.find(id)
        console.log(product)
        //const cartProduct = new cartDto(product)
        await cartDao.saveItem(product)
    } catch (error) {
    console.log('error service')
    }
}

module.exports = {
    add,
}