const axios = require('axios').default;

// These should be stored off the bot
// Maybe AWS or something
const paymayaCredentials = {
    secret_key: 'sk-X8qolYjy62kIzEbr0QRK1h4b4KDVHaNcwMYk39jInSl',
    public_key: 'pk-Z0OSzLvIcOI2UIvDhdTGVVfRSSeiGStnceqwUE7n0Ah',
    url: 'https://pg-sandbox.paymaya.com', // Sandbox

    // These are blank for sandbox
    username: '',
    password: '',
};

const paymayaUrls = {
    // Tokenizing credit cards
    CreatePayMayaToken:
        'https://pg-sandbox.paymaya.com/payments/v1/payment-tokens',

    // Create the payment using the tokenized card
    CreatePayment: 'https://pg-sandbox.paymaya.com/payments/v1/payments',

    // Used for registering webhooks to the server
    CreateWebhooks: 'https://pg-sandbox.paymaya.com/payments/v1/webhooks',
};

/**
 * SANDBOX TEST CARDS
 * MASTERCARD
 * 5123456789012346
 * 12 2025
 * 111
 */

// Encode String
function EncodeBase64(myString) {
    return Buffer.from(myString).toString('base64');
}

/**
 * Tokenizes the given credit card object
 */
exports.TokenizeCard = async (card) => {
    // Card JSON
    // {
    //     "card": {
    //       "number": "5123456789012346",
    //       "expMonth": "12",
    //       "expYear": "2025",
    //       "cvc": "111"
    //     }
    // }

    try {
        let body = card;
        if (!card) {
            body = {
                card: {
                    number: '5123456789012346',
                    expMonth: '12',
                    expYear: '2025',
                    cvc: '111',
                },
            };
        }

        let auth = `${paymayaCredentials.public_key}:${paymayaCredentials.username}${paymayaCredentials.password}`;
        auth = EncodeBase64(auth);

        let response = await axios({
            url: paymayaUrls.CreatePayMayaToken,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${auth}`,
            },
            data: body,
        })
            .then((response) => response.data)
            .catch((e) => {
                console.error('\n Axios Error');
                throw e.response.data;
            });
        return response;
    } catch (e) {
        console.log(e);
    }
};

// POSTs the payment to PayMaya
exports.CreatePayment = async (paymentToken, user_id, order_id) => {
    try {
        // BODY REFERENCE
        /**
         * {
            "paymentTokenId": "zHaqT073VaBlLkEelWUvFOXOQPIyNSxqiyod3KfzFDVVYwVYiWauCOorsuIXQ6THsMrVVdDEPCT11vdW2PdvoaISmrfXoWRhWgwRUQyyX0hjV6sjVZ3DLmkltdUEUz6ZsFue9ka9otYM24xbrS6F7zBRYuC8W6m586G3745hg",
            "totalAmount": {
                "amount": 100,
                "currency": "PHP"
            },
            "buyer": {
                "firstName": "John",
                "middleName": "Paul",
                "lastName": "Doe",
                "birthday": "1995-10-24",
                "customerSince": "1995-10-24",
                "sex": "M",
                "contact": {
                "phone": "+639181008888",
                "email": "merchant@merchantsite.com"
                },
                "shippingAddress": {
                "firstName": "John",
                "middleName": "Paul",
                "lastName": "Doe",
                "phone": "+639181008888",
                "email": "merchant@merchantsite.com",
                "line1": "6F Launchpad",
                "line2": "Reliance Street",
                "city": "Mandaluyong City",
                "state": "Metro Manila",
                "zipCode": "1552",
                "countryCode": "PH",
                "shippingType": "ST" // ST - for standard, SD - for same day
                },
                "billingAddress": {
                "line1": "6F Launchpad",
                "line2": "Reliance Street",
                "city": "Mandaluyong City",
                "state": "Metro Manila",
                "zipCode": "1552",
                "countryCode": "PH"
                }
            },
            "redirectUrl": {
                "success": "https://www.merchantsite.com/success",
                "failure": "https://www.merchantsite.com/failure",
                "cancel": "https://www.merchantsite.com/cancel"
            },
            "requestReferenceNumber": "1551191039",
            "metadata": {}
            }
         */

        let body = {
            paymentTokenId: paymentToken,
            totalAmount: {
                amount: 100,
                currency: 'PHP',
            },
            buyer: {
                firstName: 'John',
                middleName: 'Paul',
                lastName: 'Doe',
                birthday: '1995-10-24',
                customerSince: '1995-10-24',
                sex: 'M',
                contact: {
                    phone: '+639181008888',
                    email: 'merchant@merchantsite.com',
                },
                shippingAddress: {
                    firstName: 'John',
                    middleName: 'Paul',
                    lastName: 'Doe',
                    phone: '+639181008888',
                    email: 'merchant@merchantsite.com',
                    line1: '6F Launchpad',
                    line2: 'Reliance Street',
                    city: 'Mandaluyong City',
                    state: 'Metro Manila',
                    zipCode: '1552',
                    countryCode: 'PH',
                    shippingType: 'ST', // ST - for standard, SD - for same day
                },
                billingAddress: {
                    line1: '6F Launchpad',
                    line2: 'Reliance Street',
                    city: 'Mandaluyong City',
                    state: 'Metro Manila',
                    zipCode: '1552',
                    countryCode: 'PH',
                },
            },
            redirectUrl: {
                success: `${process.env.SERVER_URL}/payments/paymaya/success`,
                failure: `${process.env.SERVER_URL}/payments/paymaya/failure`,
                cancel: `${process.env.SERVER_URL}/payments/paymaya/cancel`,
            },
            requestReferenceNumber: '',
            metadata: {
                devaku: true,
            },
        };

        let auth = `${paymayaCredentials.secret_key}:${paymayaCredentials.username}${paymayaCredentials.password}`;
        auth = EncodeBase64(auth);

        let response = await axios({
            url: paymayaUrls.CreatePayment,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${auth}`,
            },
            data: body,
        })
            .then((response) => response.data)
            .catch((e) => {
                console.error('\n Axios Error');
                throw e.response.data;
            });

        console.log(response);
    } catch (e) {
        console.log(e);
    }
};

exports.SetupPaymaya = async () => {
    let webhooks = await GetWebhooks();

    if (webhooks) {
        await DeleteWebhooks(webhooks);
    }

    await RegisterWebhooks();
};

/**
 * Registering webhooks are important because they are
 * the most accurate way to determine the status of a user's payment
 * as per the documentation
 */
async function RegisterWebhooks() {
    try {
        let webhooks = [
            {
                name: 'PAYMENT_SUCCESS',
                callbackUrl: `${process.env.SERVER_URL}/payments/paymaya/webhook/success`,
            },
            {
                name: 'PAYMENT_FAILED',
                callbackUrl: `${process.env.SERVER_URL}/payments/paymaya/webhook/failure`,
            },
            {
                name: 'PAYMENT_EXPIRED',
                callbackUrl: `${process.env.SERVER_URL}/payments/paymaya/webhook/expire`,
            },
        ];

        // Register all three webhooks
        for (let x = 0; x < webhooks.length; x++) {
            let body = { ...webhooks[x] };
            let auth = `${paymayaCredentials.secret_key}:${paymayaCredentials.username}${paymayaCredentials.password}`;
            auth = EncodeBase64(auth);
            let response = await axios({
                url: paymayaUrls.CreateWebhooks,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${auth}`,
                },
                data: body,
            })
                .then((response) => response.data)
                .catch((e) => {
                    console.error('\n Axios Error');
                    throw e.response.data;
                });

            // console.log(response);
        }
        console.log('\n Webhooks registered!');
    } catch (e) {
        console.error(e);
    }
}

// Check if there are webhooks registered
async function GetWebhooks() {
    try {
        let auth = `${paymayaCredentials.secret_key}:${paymayaCredentials.username}${paymayaCredentials.password}`;
        auth = EncodeBase64(auth);
        let response = await axios({
            url: paymayaUrls.CreateWebhooks,
            method: 'GET',
            headers: {
                Authorization: `Basic ${auth}`,
            },
        })
            .then((response) => response.data)
            .catch((e) => {
                let { code } = e.response.data;
                if (code === 'PY0038') {
                    console.log('\n No webhooks found');
                    return [];
                } else {
                    console.error('\n Axios Error');
                    throw e.response.data;
                }
            });

        return response;
    } catch (e) {
        console.error(e);
    }
}

// Used for deleting existing webhooks
// Mainly for debugging. lol
async function DeleteWebhooks(webhoooks) {
    try {
        for (let x = 0; x < webhoooks.length; x++) {
            let { id: webhook_id } = webhoooks[x];
            // console.log('Deleting Hook: ', webhook_id);

            let auth = `${paymayaCredentials.secret_key}:${paymayaCredentials.username}${paymayaCredentials.password}`;
            auth = EncodeBase64(auth);
            await axios({
                url: `${paymayaUrls.CreateWebhooks}/${webhook_id}`,
                method: 'DELETE',
                headers: {
                    Authorization: `Basic ${auth}`,
                },
            })
                .then((response) => response.data)
                .catch((e) => {
                    console.error('\n Axios Error');
                    throw e.response.data;
                });
        }
    } catch (e) {
        console.error(e);
    }
}
