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
        let { order_id, product_id, quantity, user_id } = req.body;
        let sql = sqls.orders.CreateOrderContents;
        sql = sql.replace('<VAR1>', order_id);
        sql = sql.replace('<VAR2>', product_id);
        sql = sql.replace('<VAR3>', quantity);
        let result = await knex.DatabaseQuery({
            sql,
        });

        // Calculate total of cart
        sql = sqls.orders.CalculateTotalOfCart;
        sql = sql.replace('<VAR1>', order_id);
        let total = await knex.DatabaseQuery({ sql });
        total = total[0].total;

        // Update order_details
        sql = sqls.orders.UpdateTotalOrderEntry;
        sql = sql.replace('<VAR1>', parseInt(total));
        sql = sql.replace('<VAR2>', order_id);
        sql = sql.replace('<VAR3>', user_id);
        await knex.DatabaseQuery({ sql });

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
        let sql = sqls.orders.ReadCartContentsJSON;
        sql = sql.replace('<VAR1>', req.params.order_id);
        let items = await knex.DatabaseQuery({ sql });
        items = items[0].json_agg;

        // Calculate total of cart
        sql = sqls.orders.CalculateTotalOfCart;
        sql = sql.replace('<VAR1>', req.params.order_id);
        let total = await knex.DatabaseQuery({ sql });
        total = parseInt(total[0].total);

        res.json({
            items,
            total,
        });
    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }
});

// Update Quantity of Item in Cart
// Compute new total
// Return cart items json
router.put('/:order_id', express.json(), async function (req, res) {
    try {
        let { quantity, product_id, user_id } = req.body;
        // Update quantity of item in new cart
        let sql = sqls.orders.UpdateQuantityOrderContents;
        sql = sql.replace('<VAR1>', quantity);
        sql = sql.replace('<VAR2>', req.params.order_id);
        sql = sql.replace('<VAR3>', product_id);
        await knex.DatabaseQuery({ sql });

        // Calculate total of cart
        sql = sqls.orders.CalculateTotalOfCart;
        sql = sql.replace('<VAR1>', req.params.order_id);
        let total = await knex.DatabaseQuery({ sql });
        total = total[0].total;

        // Update order_details
        sql = sqls.orders.UpdateTotalOrderEntry;
        sql = sql.replace('<VAR1>', parseInt(total));
        sql = sql.replace('<VAR2>', req.params.order_id);
        sql = sql.replace('<VAR3>', user_id);
        await knex.DatabaseQuery({ sql });

        // Get updated cart items
        sql = sqls.orders.ReadCartContentsJSON;
        sql = sql.replace('<VAR1>', req.params.order_id);
        let items = await knex.DatabaseQuery({ sql });
        items = items[0].json_agg;

        res.json({
            total,
            items,
        });
    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }
});

// Delete Item in Cart
router.delete('/:user_id/:order_id/:product_id', async function (req, res) {
    try {
        // Delete cart item
        let sql = sqls.orders.DeleteOrderContents;
        sql = sql.replace('<VAR1>', req.params.order_id);
        sql = sql.replace('<VAR2>', req.params.product_id);
        await knex.DatabaseQuery({ sql });

        // Calculate total of cart
        sql = sqls.orders.CalculateTotalOfCart;
        sql = sql.replace('<VAR1>', req.params.order_id);
        let total = await knex.DatabaseQuery({ sql });
        total = total[0].total;
        console.log('TOTAL AMOUNT: ', total);

        // Will return null if there is nothing in the cart
        if (!total) {
            total = 0;
        }

        // Update order_details
        sql = sqls.orders.UpdateTotalOrderEntry;
        sql = sql.replace('<VAR1>', parseInt(total));
        sql = sql.replace('<VAR2>', req.params.order_id);
        sql = sql.replace('<VAR3>', req.params.user_id);
        await knex.DatabaseQuery({ sql });

        await knex.DatabaseQuery({
            sql,
        });

        // Get updated cart items
        sql = sqls.orders.ReadCartContentsJSON;
        sql = sql.replace('<VAR1>', req.params.order_id);
        let items = await knex.DatabaseQuery({ sql });
        items = items[0].json_agg;

        // Will return null if empty
        if (!items) {
            items = [];
        }

        res.json({
            total,
            items,
        });
    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }
});

exports.router = router;
