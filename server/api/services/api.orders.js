const express = require('express');
const router = express.Router();

const knex = require('../../lib_modules/utility/database/knexStore');
const sqls = require('../../lib_modules/utility/database/SQLs');

// Base URL for reference
// localhost/orders

// Create User order
// Returns order_details_id
router.post('/', express.json(), async function (req, res) {
    try {
        let { user_id, total, payment_id } = req.body;
        let sql = sqls.orders.CreateOrderEntry;
        sql = sql.replace('<VAR1>', user_id);
        sql = sql.replace('<VAR2>', total);
        sql = sql.replace('<VAR3>', payment_id);
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

// Read User Order Details
router.get('/:order_details_id', async function (req, res) {
    try {
        let sql = sqls.orders.ReadOrderEntry;
        sql = sql.replace('<VAR1>', req.params.order_details_id);
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

// Update Total
router.put('/:order_details_id', express.json(), async function (req, res) {
    try {
        let { total, user_id } = req.body;
        let sql = sqls.orders.UpdateTotalOrderEntry;
        sql = sql.replace('<VAR1>', total);
        sql = sql.replace('<VAR2>', req.params.order_details_id);
        sql = sql.replace('<VAR3>', user_id);

        await knex.DatabaseQuery({
            sql,
        });
        res.json({
            status: 'success',
        });
    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }
});

// Update PaymentId
router.put('/:order_details_id', express.json(), async function (req, res) {
    try {
        let { payment_id, user_id } = req.body;
        let sql = sqls.orders.UpdateTotalOrderEntry;
        sql = sql.replace('<VAR1>', payment_id);
        sql = sql.replace('<VAR2>', req.params.order_details_id);
        sql = sql.replace('<VAR3>', user_id);

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

// Delete Order Entry
router.delete('/:user_id/:order_details_id/', async function (req, res) {
    try {
        let sql = sqls.orders.DeleteOrderEntry;
        sql = sql.replace('<VAR1>', req.params.user_id);
        sql = sql.replace('<VAR2>', req.params.order_details_id);

        let result = await knex.DatabaseQuery({
            sql,
        });
        res.json({
            status: 'success',
        });
    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }
});

exports.router = router;
