const Products = require('../models/products')

const getProducts = async () => {
    return await Products.find()
} 

const productsPaginate = async ( limit, page ) => {
    return await Products.paginate({}, { limit, page })
}

const findProduct = async item => {
    return await Products.findById(item)
}

const createProduct = async userInfo => {
    const product = new Products(userInfo)
    await product.save()
    return product
}

const updateProduct = async (id, item) => {
    await Products.findByIdAndUpdate(id, item)
    const productUpdated = await Products.findById(id)
    return productUpdated
}
const deleteProduct = async item => {
    await Products.findByIdAndDelete(item)
}

module.exports = {
    getProducts,
    findProduct,
    createProduct,
    productsPaginate,
    updateProduct,
    deleteProduct,
}