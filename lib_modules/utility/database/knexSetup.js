// Setup the database
module.exports = function (app) {
    // Set the session middleware
    const session = require('express-session');
    const KnexSessionStore = require('connect-session-knex')(session);
    const environment = process.env.DB_ENVIRONMENT;
    const knex = require('knex')(require('../../../knexfile.js')[environment]);

    const store = new KnexSessionStore({
        knex,
        tablename: 'sessions', // optional. Defaults to 'sessions'
    });

    app.use(
        session({
            secret: 'dragons',
            cookie: {
                maxAge: Number(process.env.COOKIE_DURATION),
            },
            resave: true,
            saveUninitialized: false,
            store,
        })
    );
};
