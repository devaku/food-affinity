exports.up = async function (knex) {
    // Create tables
    return knex.schema.createTable('payment_details', function (t) {
        t.increments('id').primary();
        t.string('merchant_id').nullable();
        t.jsonb('merchant_data').nullable();
        t.decimal('amount').notNullable();
        t.string('provider').notNullable();
        t.string('status').notNullable();
        t.timestamps(true, true);
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('payment_details');
};
