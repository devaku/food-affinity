const baseURL = 'http://localhost:8080';

// ROUTES

// Ping the Heroku server
export const READ_Home = () => {
    return fetch(`${baseURL}/`).then((res) => res.json());
};

/**
 * PRODUCT
 */
// Get all products
export const READ_AllProducts = () => {
    return fetch(`${baseURL}/products`).then((res) => res.json());
};

// Get some products based on category
export const READ_SomeProducts = (id) => {
    return fetch(`${baseURL}/products/${id}`).then((res) => res.json());
};

/**
 * CATEGORIES
 */
// Get all categories
export const READ_AllCategories = () => {
    return fetch(`${baseURL}/categories`).then((res) => res.json());
};

/**
 * CART
 */
// Insert an item into the cart
export const CREATE_CartContents = (order_id, product_id, quantity) => {
    let data = {
        order_id,
        product_id,
        quantity,
    };
    return fetch(`${baseURL}/cart`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());
};

// Read all the contents in the cart
export const READ_CartContents = (order_id) => {
    return fetch(`${baseURL}/cart/${order_id}`).then((res) => res.json());
};

// Update quantity of a cart item
export const UPDATE_CartQuantityContents = (order_id, product_id, quantity) => {
    let data = {
        order_id,
        product_id,
        quantity,
    };
    return fetch(`${baseURL}/cart/${order_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());
};

// Delete Cart Item
export const DELETE_CartContents = (order_id, product_id) => {
    return fetch(`${baseURL}/cart/${order_id}/${product_id}`, {
        method: 'DELETE',
    }).then((res) => res.json());
};

/**
 * PAYMENT DETAILS
 */

// Create a payment transaction
// Returns a payment_details_id
export const CREATE_PaymentDetails = (amount, provider, status) => {
    let data = {
        amount,
        provider,
        status,
    };
    return fetch(`${baseURL}/payment_details`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());
};

// Read User Payment Details
export const READ_PaymentDetails = (payment_details_id) => {
    return fetch(`${baseURL}/payment_details/${payment_details_id}`).then(
        (res) => res.json()
    );
};

// Update Status of User Transaction
export const UPDATE_StatusPaymentDetails = (payment_details_id, status) => {
    let data = {
        status,
    };
    return fetch(`${baseURL}/payment_details/${payment_details_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());
};

// Update Amount of User Transaction
export const UPDATE_AmountPaymentDetails = (payment_details_id, amount) => {
    let data = {
        amount,
    };
    return fetch(`${baseURL}/payment_details/${payment_details_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());
};

// Update Provider of User Transaction
export const UPDATE_ProviderPaymentDetails = (payment_details_id, provider) => {
    let data = {
        provider,
    };
    return fetch(`${baseURL}/payment_details/${payment_details_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());
};
