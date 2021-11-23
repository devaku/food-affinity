module.exports = function (app) {
    const homeController = require('./api/controllers/homeController.js');
    app.use('/', homeController.router);
};
