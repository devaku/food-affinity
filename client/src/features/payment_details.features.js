import * as api from '../api';

// Create payment 
export const Create_PaymentDetails =
    (amount, provider, status) => async (dispatch, getState) => {
        try {
            const payload = await api.CREATE_PaymentDetails(
                amount,
                provider,
                status
            );

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
