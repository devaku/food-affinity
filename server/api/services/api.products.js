const express = require('express');
const router = express.Router();

const knex = require('../../lib_modules/utility/database/knexStore');
const sqls = require('../../lib_modules/utility/database/SQLs');

// Get all products
router.get('/', async function (req, res) {
    try {
        let sql = sqls.products.GetAllProducts;
        let result = await knex.DatabaseQuery({
            sql,
        });
        res.json(result);
    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }
});

// Get a product by category
router.get('/:product_id/', async function (req, res) {
    try {
        let sql = sqls.products.GetAProducts;
        sql = sql.replace('<VAR1>', req.params.product_id);

        let result = await knex.DatabaseQuery({
            sql,
        });
        result = result[0];
        res.json(result);
    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }
});

// Get products by category
router.get('/category/:category_id', async function (req, res) {
    try {
        let sql = sqls.products.GetAllProductsWhereCategory;
        sql = sql.replace('<VAR1>', req.params.category_id);

        let result = await knex.DatabaseQuery({
            sql,
        });
        res.json(result);
    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }
});

exports.router = router;
