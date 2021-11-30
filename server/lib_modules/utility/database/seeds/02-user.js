const utilityModule = require('../../../services/utilityModule.js');

exports.seed = async function (knex) {
    // Deletes ALL existing entries and reset the table
    // await knex('user').truncate();

    let seedUsers = [
        {
            username: 'user1',
            email: 'user1@gmail.com',
            level: 1,
            password: 'user1',
        },
        {
            username: 'admin1',
            email: 'admin1@gmail.com',
            level: 2,
            password: 'admin1',
            studentid: null,
        },
        {
            username: 'super1',
            email: 'super1@gmail.com',
            level: 3,
            password: 'super1',
            studentid: null,
        },
    ];

    // Inserts seed entries
    for (let x = 0; x < seedUsers.length; x++) {
        // Get a user
        let user = seedUsers[x];

        // Hash the password
        let { salt, hash } = utilityModule.SaltHashPassword({
            password: user.password,
        });

        await knex('user').insert([
            {
                username: user.username,
                email: user.email,
                salt,
                encrypted_password: hash,
                level: user.level,
            },
        ]);
    }
};
