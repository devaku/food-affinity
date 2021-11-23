/**
 * NOTES ABOUT KNEX:
 *
 * Knex is SUPER QUIRKY
 * When running from the CLI, for example:
 *
 * knex migrate:list (list all pending migrations)
 *
 * It will run the knexfile.js locally.
 * IT WON'T BE ABLE TO RUN/FIND THE DOTENV FILE.
 *
 * THE DEFAULT ENVIRONMENT IS 'development'
 * Which is why it's the one that's hardcoded
 *
 * To switch environments during runtime, Check knexSetup.js.
 * It refers to process.env.DB_ENVIRONMENT to
 * check which environment to load during run time.
 *
 * To switch environments on the CLI just add the appropriate tag
 *
 * knex migrate:list --env local
 *
 * "local" being the environment
 */

module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            host: 'localhost',
            port: '5432',
            user: 'postgres',
            password: 'admin',
            database: 'foodaffinitydb',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: './lib_modules/utility/database/migrations',
        },
        seeds: {
            directory: './lib_modules/utility/database/seeds',
        },
    },

    local: {
        client: 'postgresql',
        connection: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: './lib_modules/utility/database/migrations',
        },
        seeds: {
            directory: './lib_modules/utility/database/seeds',
        },
    },

    staging: {},

    heroku: {
        client: 'postgresql',
        connection: process.env.DB_POSTGRES_CONNECTION_STRING,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: './lib_modules/utility/database/migrations',
        },
        seeds: {
            directory: './lib_modules/utility/database/seeds',
        },
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
};
