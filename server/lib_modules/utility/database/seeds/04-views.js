let { sql_cart_view } = require('../SQLs/sql.views');

exports.seed = async function (knex) {
    /**
     * CREATE THE VIEWS
     */

    await knex.schema.raw(`${sql_cart_view}`);
};
