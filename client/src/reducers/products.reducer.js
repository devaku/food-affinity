const productReducer = (products = [], action) => {
    let { type, payload } = action;
    switch (type) {
        case 'FETCH_ALL':
            return payload;
        default:
            return products;
    }
};

export default productReducer;
