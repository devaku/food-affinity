 exports.up = async function (knex) {
    // Create tables
    return knex.schema
        .createTable('product_category', function (t) {
            t.increments('id').primary();
            t.string('name').notNullable();
            t.string('description').nullable();
            t.timestamps(true, true);
        })
        .createTable('product', function (t) {
            t.increments('id').primary();
            t.integer('product_categoryid')
                .references('id')
                .inTable('product_category')
                .onDelete('restrict')
                .notNullable();
            t.integer('quantity').notNullable();
            t.string('name').notNullable();
            t.string('description').nullable();
            t.timestamps(false, true);
            t.decimal('price').notNullable();
        });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('product');

    await knex.schema.dropTableIfExists('product_category');
};
