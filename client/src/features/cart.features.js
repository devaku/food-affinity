import * as api from '../api';

// Add a cart item
export const Create_CartContents =
    (categoryid) => async (dispatch, getState) => {
        try {
            const payload = await api.READ_SomeProducts(categoryid);

            dispatch({
                type: 'cart/ReadSome',
                payload,
            });
        } catch (error) {
            console.error(error);
        }
    };

export const Read_CartContents = async (dispatch, getState) => {
    try {
        const payload = await api.READ_AllProducts();

        dispatch({
            type: 'cart/ReadContents',
            payload,
        });
    } catch (error) {
        console.error(error);
    }
};

export default function cartReducer(cartContents = [], action) {
    let { type, payload } = action;
    switch (type) {
        case 'products/ReadAll':
        case 'products/ReadSome':
            return payload;
        default:
            return products;
    }
}
