const express = require('express');
const router = express.Router();

const knex = require('../../lib_modules/utility/database/knexStore');
const sqls = require('../../lib_modules/utility/database/SQLs');

router.get('/', async function (req, res) {
    try {
        let sql = 'SELECT myfunction(?)';
        let myobj = {
            key: 'other',
            anotherkey: 1,
        };
        let sqlvariables = [myobj];
        let result = await knex.DatabaseFunction(sql, sqlvariables);
        console.log(result);
        res.json(result);
    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }
});

exports.router = router;
