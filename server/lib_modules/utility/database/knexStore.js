const environment = process.env.DB_ENVIRONMENT;
const knex = require('knex')(require('../../../knexfile.js')[environment]);

module.exports = {
    //  Raw Knex Query
    DatabaseQuery: async function DatabaseQuery({ sql }) {
        try {
            let returnedRows;
            if (process.env.DB_ENVIRONMENT === 'heroku') {
                returnedRows = await knex.raw(sql);
            } else {
                returnedRows = await knex.raw(sql).debug();
            }
            returnedRows = returnedRows.rows;
            return returnedRows;
        } catch (e) {
            console.log('\n knexStore.DatabaseQuery ERROR');
            console.error(e);
            throw e;
        }
    },

    DatabaseFunction: async function (sql, sqlvar) {
        try {
            let returnedRows;
            if (process.env.DB_ENVIRONMENT === 'heroku') {
                returnedRows = await knex.raw(sql, sqlvar);
            } else {
                returnedRows = await knex.raw(sql, sqlvar).debug();
            }
            returnedRows = returnedRows.rows;
            return returnedRows;
        } catch (e) {
            console.log('\n knexStore.DatabaseQuery ERROR');
            console.error(e);
            e = {
                ...e,
                message: e.message,
            };
            throw e;
        }
    },
};
