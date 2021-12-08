import * as api from '../api';

const initialState = {
    status: 'idle',
    entities: [],
};

const productReducer = (products = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'products/Loading':
            return {
                ...products,
                status: 'loading',
            };
        case 'products/ReadAll':
        case 'products/ReadSome':
            return {
                status: 'idle',
                entities: [...payload],
            };
        default:
            return products;
    }
};

export const Read_AllProducts = async (dispatch, getState) => {
    try {
        // Start Loading
        dispatch({
            type: 'products/Loading',
        });

        const payload = await api.READ_AllProducts();

        // Update States
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
        // Start Loading
        dispatch({
            type: 'products/Loading',
        });
        const payload = await api.READ_SomeProducts(categoryid);

        // Update States
        dispatch({
            type: 'products/ReadSome',
            payload,
        });
    } catch (error) {
        console.error(error);
    }
};

export default productReducer;
