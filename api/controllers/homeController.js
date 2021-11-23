const express = require('express');
const router = express.Router();

router.get('/', async function (req, res) {
    console.log(req.session);
    req.session.mycookie = true;
    console.log(req.session.id);
    console.log(req.cookies);
    res.json({
        message: 'Hello World',
    });
});

router.get('/logout', (req, res) => {
    console.log('LOGGING OUT');
    req.session.destroy();

    console.log(req.session);
    res.json({
        message: 'logout',
    });
});

module.exports = {
    router,
};
