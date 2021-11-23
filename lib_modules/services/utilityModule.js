// Generic module that holds knick knacks of functions
const crypto = require('crypto');

function randomString() {
    return crypto.randomBytes(4).toString('hex');
}

module.exports = {
    // Creates a hash for the password
    SaltHashPassword: function SaltHashPassword({
        password,
        salt = randomString(),
    }) {
        try {
            console.log('\n utilityModule.SaltHashPassword');

            // TODO: DEBUG Code
            // console.log('Password: ', password);
            // console.log('Generated Salt: ', salt);
            const hash = crypto.createHmac('sha512', salt).update(password);
            return {
                salt,
                hash: hash.digest('hex'),
            };
        } catch (e) {
            console.log('\n utilityModule.SaltHashPassword ERROR');
            console.error(e);
            throw e;
        }
    },
};
