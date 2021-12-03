const express = require('express');
const router = express.Router();

const knex = require('../../lib_modules/utility/database/knexStore');
const sqls = require('../../lib_modules/utility/database/SQLs');

// Get all categories
router.get('/', async function (req, res) {
    try {
        let categories = await knex.DatabaseQuery({
            sql: sqls.categories.GetAllCategories,
        });
        res.json(categories);
    } catch (e) {
        res.status(400).json({
            error: e,
        });
    }
});

exports.router = router;
