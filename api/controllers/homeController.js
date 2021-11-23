const express = require('express');
const router = express.Router();

router.use('/', async function (req, res) {
    res.json({
        message: 'Hello World',
    });
});

module.exports = {
    router,
};
