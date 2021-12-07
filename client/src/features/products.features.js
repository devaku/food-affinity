import * as api from '../api';

const productReducer = (products = [], action) => {
    let { type, payload } = action;
    switch (type) {
        case 'products/ReadAll':
        case 'products/ReadSome':
            return payload;
        default:
            return products;
    }
};

export const Read_AllProducts = async (dispatch, getState) => {
    try {
        const payload = await api.READ_AllProducts();

        dispatch({
            type: 'products/ReadAll',
            payload,
        });
    } catch (error) {
        console.error(error);
    }
};

export const Read_SomeProducts = (categoryid) => async (dispatch, getState) => {
    try {
        const payload = await api.READ_SomeProducts(categoryid);

        dispatch({
            type: 'products/ReadSome',
            payload,
        });
    } catch (error) {
        console.error(error);
    }
};

export default productReducer;
