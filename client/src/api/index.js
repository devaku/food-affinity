const baseURL = 'http://localhost:8080';

// ROUTES
// PRODUCT
export const READ_Products = () => {
    return fetch(`${baseURL}/products`).then((res) => res.json());
};

// CATEGORIES
