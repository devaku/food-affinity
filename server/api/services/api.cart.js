const express = require('express');
const router = express.Router();

const knex = require('../../lib_modules/utility/database/knexStore');
const sqls = require('../../lib_modules/utility/database/SQLs');

// Base URL for reference
// localhost/cart

// Create User Cart
// Returns order_id
router.post('/', express.json(), async function (req, res) {
    try {
        let { order_id, product_id, quantity } = req.body;
        let sql = sqls.orders.CreateOrderContents;
        sql = sql.replace('<VAR1>', order_id);
        sql = sql.replace('<VAR2>', product_id);
        sql = sql.replace('<VAR3>', quantity);
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

// Read User Cart Contents
router.get('/:order_id', async function (req, res) {
    try {
        let sql = sqls.orders.ReadOrderContents;
        sql = sql.replace('<VAR1>', req.params.order_id);
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

// Update Quantity of Item in Cart
router.put('/:order_id', express.json(), async function (req, res) {
    try {
        let { quantity, product_id } = req.body;
        let sql = sqls.orders.UpdateQuantityOrderContents;
        sql = sql.replace('<VAR1>', quantity);
        sql = sql.replace('<VAR2>', req.params.order_id);
        sql = sql.replace('<VAR3>', product_id);

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

// Delete Item in Cart
router.delete('/:order_id/:product_id', async function (req, res) {
    try {
        let sql = sqls.orders.DeleteOrderContents;
        sql = sql.replace('<VAR1>', req.params.order_id);
        sql = sql.replace('<VAR2>', req.params.product_id);

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
