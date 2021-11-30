exports.seed = async function (knex) {
    // Deletes ALL existing entries and reset the table
    // await knex('user_type').truncate();

    let seedUserTypes = [
        {
            level: 1,
            type_description: 'USER',
        },
        {
            level: 2,
            type_description: 'ADMIN',
        },
        {
            level: 3,
            type_description: 'SUPER',
        },
    ];

    // Inserts seed entries
    for (let x = 0; x < seedUserTypes.length; x++) {
        let userType = seedUserTypes[x];

        await knex('user_type').insert([
            {
                level: userType.level,
                type_description: userType.type_description,
            },
        ]);
    }
};
