const express = require('express');
const router = express.Router();

const knex = require('../../lib_modules/utility/database/knexStore');
const sqls = require('../../lib_modules/utility/database/SQLs');

// Base URL for reference
// localhost/payment_details

// Create Payment Details
// Returns payment_details_id
router.post('/', express.json(), async function (req, res) {
    try {
        let { amount, provider, status } = req.body;
        let sql = sqls.payment_details.CreatePaymentDetails;
        sql = sql.replace('<VAR1>', amount);
        sql = sql.replace('<VAR2>', provider);
        sql = sql.replace('<VAR3>', status);
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

// Read User Payment Details
router.get('/:payment_details_id', async function (req, res) {
    try {
        let sql = sqls.payment_details.ReadPaymentDetails;
        sql = sql.replace('<VAR1>', req.params.payment_details_id);
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

// Update Status of User Transaction
router.put('/:payment_details_id', express.json(), async function (req, res) {
    try {
        let { status } = req.body;
        let sql = sqls.payment_details.UpdateStatusPaymentDetails;
        sql = sql.replace('<VAR1>', status);
        sql = sql.replace('<VAR2>', req.params.payment_details_id);

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

// Update Amount of User Transaction
router.put('/:payment_details_id', express.json(), async function (req, res) {
    try {
        let { amount } = req.body;
        let sql = sqls.payment_details.UpdateAmountPaymentDetails;
        sql = sql.replace('<VAR1>', amount);
        sql = sql.replace('<VAR2>', req.params.payment_details_id);

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

// Update Provider of User Transaction
router.put('/:payment_details_id', express.json(), async function (req, res) {
    try {
        let { provider } = req.body;
        let sql = sqls.payment_details.UpdateProviderPaymentDetails;
        sql = sql.replace('<VAR1>', provider);
        sql = sql.replace('<VAR2>', req.params.payment_details_id);

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

exports.router = router;
