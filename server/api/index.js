module.exports = function (app) {
    app.use('/', require('./services/api.home.js').router);
    app.use('/categories', require('./services/api.categories.js').router);
    app.use('/products', require('./services/api.products.js').router);
    app.use('/orders', require('./services/api.orders.js').router);
    app.use('/cart', require('./services/api.cart.js').router);
    app.use(
        '/payment_details',
        require('./services/api.payment_details.js').router
    );

    app.use('/debug', require('./services/api.debug.js').router);
};
