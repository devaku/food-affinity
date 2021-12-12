exports.up = async function (knex) {};
exports.down = async function (knex) {
    await knex.raw('DROP VIEW if exists "cart_view";');
};
