import * as api from '../api';

const productReducer = (products = [], action) => {
    let { type, payload } = action;
    switch (type) {
        case 'FETCH_ALL':
            return payload;
        default:
            return products;
    }
};

export const fetch_all = () => async (dispatch) => {
    try {
        const payload = await api.READ_Products();
        console.log(payload);
        const action = {
            type: 'FETCH_ALL',
            payload,
        };
        dispatch(action);
    } catch (error) {
        console.error(error);
    }
};

export default productReducer;
