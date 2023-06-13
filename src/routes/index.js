const usersController = require('../controllers/users.controller');
const productsController = require('../controllers/products.controller');
const cartController = require('../controllers/cart.controller');

const router = app => {
    app.use('/users', usersController);
    app.use('/products', productsController);
    app.use('/cart', cartController);
}

module.exports = router;