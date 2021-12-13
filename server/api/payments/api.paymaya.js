const express = require('express');
const router = express.Router();

const knex = require('../../lib_modules/utility/database/knexStore');
const sqls = require('../../lib_modules/utility/database/SQLs');

// Base URL for reference
// localhost/payments/paymaya

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

// Redirect URL for PayMaya
router.get('/:status', async function (req, res) {
    try {
        console.log('REDIRECT URL PINGED');
        console.log(req.params.status);
        res.json({
            status: req.params.status,
        });
    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }
});

// Webhook for paymaya
router.post('/webhook/:type', express.json(), async function (req, res) {
    try {
        //#region JSON REFERENCES
        // SUCCESS JSON
        // {
        //     "id": "ee54746b-28fd-4b92-91f7-be31bde4d334",
        //     "isPaid": true,
        //     "status": "PAYMENT_SUCCESS",
        //     "amount": "100",
        //     "currency": "PHP",
        //     "canVoid": true,
        //     "canRefund": false,
        //     "canCapture": false,
        //     "createdAt": "2021-12-13T03:05:39.000Z",
        //     "updatedAt": "2021-12-13T03:06:07.000Z",
        //     "description": "Charge for merchant@merchantsite.com",
        //     "paymentTokenId": "TxxZeQWqXxLUy302AhveyLLpV9pxQtTbR5IXa6rSOu20yoTjHJsN7MZSxqSmutRvgrGbBcBmHJ7SoHvcKBWzlUZ2K2akYvHX0Zf91MUj36Fzi4ueZc2GOyV8R1YPr5PLpPA0ZVCPHMwOpeerF9VYPIxYl3gb4oE",
        //     "fundSource": {
        //       "type": "card",
        //       "id": "TxxZeQWqXxLUy302AhveyLLpV9pxQtTbR5IXa6rSOu20yoTjHJsN7MZSxqSmutRvgrGbBcBmHJ7SoHvcKBWzlUZ2K2akYvHX0Zf91MUj36Fzi4ueZc2GOyV8R1YPr5PLpPA0ZVCPHMwOpeerF9VYPIxYl3gb4oE",
        //       "description": "**** **** **** 2346",
        //       "details": {
        //         "scheme": "master-card",
        //         "last4": "2346",
        //         "first6": "512345",
        //         "masked": "512345******2346",
        //         "issuer": "Others"
        //       }
        //     },
        //     "receipt": {
        //       "transactionId": "709646af-2bd0-4949-8c27-8bdb022a5b74",
        //       "receiptNo": "ae450cc4ad23",
        //       "approval_code": "00001234",
        //       "approvalCode": "00001234"
        //     },
        //     "metadata": {},
        //     "approvalCode": "00001234",
        //     "receiptNumber": "ae450cc4ad23",
        //     "requestReferenceNumber": ""
        //   }

        // EXPIRED JSON
        // {
        //     "id": "d9643fb9-46d3-4c3f-8c21-95f0b95f58d9",
        //     "isPaid": false,
        //     "status": "PAYMENT_EXPIRED",
        //     "amount": "10",
        //     "currency": "PHP",
        //     "canVoid": false,
        //     "canRefund": false,
        //     "canCapture": false,
        //     "createdAt": "2021-12-13T02:52:57.000Z",
        //     "updatedAt": "2021-12-13T03:07:59.000Z",
        //     "description": "Charge for mrafael@you-source.com",
        //     "paymentTokenId": "bCa5g6GlZLROBlgsBuMrZK2BHJJSdXDwUy7rPHSUBLIGLfsKW9FbNPvuUL7a6uAr4BRq4L0RBUHqnL1CrmH0FbW9mUqSVS9u060HWQeNIcwak4rMHNOub3coAfWvrFCk7ppv1JhUVLNTAGB6e1oYl0Kgw1xZeaXL3XM2Rb8Ks"
        //   }
        //#endregion

        // Check metadata
        // Just for debugging purposes
        // You normally would not share other webhooks
        // with other people. lol
        let { body } = req;
        if (!body.metadata.devaku) {
            res.json({
                status: 'failure',
                message: 'Who are you? ',
            });
            return;
        }

        console.log('WEBHOOK URL PINGED');
        console.log(req.params.type);
        console.log('BODY: ', JSON.stringify(req.body));
        res.json({
            status: req.params.type,
        });
    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }
});

exports.router = router;
