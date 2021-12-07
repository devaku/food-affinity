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
        // let states = getState();
        console.log('BEFORE DISPATCH');
        console.log(getState());
        dispatch({
            type: 'products/ReadAll',
            payload,
        });
        console.log('AFTER DISPATCH');
        console.log(getState());
    } catch (error) {
        console.error(error);
    }
};

export const Read_SomeProducts = (categoryid) => async (dispatch, getState) => {
    try {
        const payload = await api.READ_SomeProducts(categoryid);
        // let states = getState();
        console.log('BEFORE DISPATCH');
        console.log(getState());
        dispatch({
            type: 'products/ReadSome',
            payload,
        });
        console.log('AFTER DISPATCH');
        console.log(getState());
    } catch (error) {
        console.error(error);
    }
};

export default productReducer;
