exports.up = async function (knex) {
    // Create user tables
    return knex.schema
        .createTable('user_type', function (t) {
            t.integer('level').primary().notNullable();
            t.string('type_description');
        })
        .createTable('user', function (t) {
            t.increments('id').primary();
            t.string('username').notNullable();
            t.string('email').nullable();
            t.timestamps(false, true);
            t.string('salt').notNullable();
            t.integer('level')
                .references('level')
                .inTable('user_type')
                .onDelete('cascade')
                .notNullable();
            t.string('encrypted_password').notNullable();
        });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('user');
    await knex.schema.dropTableIfExists('user_type');
};
