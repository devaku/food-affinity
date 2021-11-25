exports.seed = async function (knex) {
    // Deletes ALL existing entries and reset the table
    // await knex('user').truncate();

    const {
        product_category,
        products,
    } = require('../assets/database_contents');

    for (const currentValue of product_category) {
        await knex('product_category').insert([
            {
                name: currentValue.name,
                description: currentValue.description,
            },
        ]);
    }

    for (const currentValue of products) {
        await knex('product').insert([currentValue]);
    }
};
