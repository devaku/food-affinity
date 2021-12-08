const baseURL = 'http://localhost:8080';

// ROUTES

// Ping the Heroku server
export const READ_Home = () => {
    return fetch(`${baseURL}/`).then((res) => res.json());
};

// PRODUCT
// Get all products
export const READ_AllProducts = () => {
    return fetch(`${baseURL}/products`).then((res) => res.json());
};

// Get some products based on category
export const READ_SomeProducts = (id) => {
    return fetch(`${baseURL}/products/${id}`).then((res) => res.json());
};

// CATEGORIES
// Get all categories
export const READ_AllCategories = () => {
    return fetch(`${baseURL}/categories`).then((res) => res.json());
};

// CARTS
export const READ_AllOrdersContents = () => {
    return fetch(`${baseURL}/orders`).then((res) => res.json());
};
