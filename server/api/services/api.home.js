const express = require('express');
const router = express.Router();

router.get('/', async function (req, res) {
    req.session.mycookies = 'Hello';
    res.json({
        message: 'Hello World',
    });
});

router.get('/logout', async function (req, res) {
    req.session.destroy();
    res.json({
        message: 'Logged out',
    });
});

exports.router = router;
