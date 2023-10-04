const express = require('express');
const userRouter = require('./user.router');
const categoryRouter = require('./category.router');
const productsRouter = require('./products.router');
const imageRouter = require('./image.router');
const cartRouter = require('./cart.router');
const purchaseRouter = require('./purchase.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', userRouter)
router.use('/categories', categoryRouter)
router.use('/products', productsRouter )
router.use('/product_image', imageRouter)
router.use('/carts', cartRouter)
router.use('/purchases', purchaseRouter)

module.exports = router;