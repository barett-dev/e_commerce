const productsDao = require("../dao/products.dao");


const get = async () => {
    const products = await productsDao.getProducts()
    return products
}

const getOne = async ( item ) => {
    const product = await productsDao.findUser( item )
    return product
}
const sort = async ( limit, page ) => {
    const paginate = productsDao.productsPaginate( limit, page )
    return paginate 
}
const create = async productInfo => {
    try {        
        const newProduct = await productsDao.createProduct(productInfo);
        return newProduct
    } catch (error) {
        console.log(error)
    }
}

const update = async (id, item) => {
    try {
        const updateItem = await productsDao.updateProduct(id, item)
        return updateItem
    } catch (error) {
    console.log(error)
    }
}

const remove = async (id, item) => {
    try {
        const deleteProduct = await productsDao.deleteProduct(id, item) 
        return deleteProduct
    } catch (error){
        console.log(error)
    }
}

module.exports = {
    create,
    sort,
    get,
    getOne,
    update,
    remove,
}