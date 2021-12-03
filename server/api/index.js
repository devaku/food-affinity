module.exports = function (app) {
    app.use('/', require('./services/api.home.js').router);
    app.use('/categories', require('./services/api.categories.js').router);
    app.use('/products', require('./services/api.products.js').router);
};
