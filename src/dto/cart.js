class Cart {
    constructor(product) {
        this.title = product.title
        this.price = product.price
        this.status = product.status
        this.stock = product.stock
    }
}

module.export = Cart
