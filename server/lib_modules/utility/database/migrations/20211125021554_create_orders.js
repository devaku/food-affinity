exports.up = async function (knex) {
    // Create tables
    return knex.schema
        .createTable('order_details', function (t) {
            t.increments('id').primary();
            t.integer('user_id')
                .references('id')
                .inTable('user')
                .onDelete('restrict')
                .notNullable();
            t.decimal('total').notNullable();
            t.integer('payment_id')
                .references('id')
                .inTable('payment_details')
                .onDelete('restrict')
                .notNullable();
            t.timestamps(true, true);
        })
        .createTable('order_items', function (t) {
            t.increments('id').primary();
            t.integer('order_id')
                .references('id')
                .inTable('order_details')
                .onDelete('restrict')
                .notNullable();
            t.integer('product_id')
                .references('id')
                .inTable('product')
                .onDelete('restrict')
                .notNullable();
            t.decimal('quantity').notNullable();
            t.timestamps(true, true);
        });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('order_items');
    await knex.schema.dropTableIfExists('order_details');
};
