import * as api from '../api';

const productReducer = (products = [], action) => {
    let { type, payload } = action;
    switch (type) {
        case 'products/ReadAll':
            return [...products, payload];
        case 'products/ReadSome':
            return payload;
        case 'debug':
            return products;
        default:
            return products;
    }
};

export const fetch_all = () => async (dispatch) => {
    try {
        const payload = await api.READ_AllProducts();
        const action = {
            type: 'products/ReadAll',
            payload,
        };
        dispatch(action);
    } catch (error) {
        console.error(error);
    }
};

export default productReducer;
