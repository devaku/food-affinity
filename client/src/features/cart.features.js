import * as api from '../api';

// Add a cart item
export const Create_CartContents =
    (order_id, product_id, quantity) => async (dispatch, getState) => {
        try {
            let payload = await api.CREATE_CartContents(
                order_id,
                product_id,
                quantity
            );

            // Get the order_id
            payload = {
                ...payload,
                entities: [product_id, quantity],
            };

            dispatch({
                type: 'cart/CreateCartContents',
                payload,
            });
        } catch (error) {
            console.error(error);
        }
    };

export const Read_CartContents = (order_id) => async (dispatch, getState) => {
    try {
        let payload = await api.READ_CartContents(order_id);

        // Get the order_id
        payload = {
            order_id,
            entities: [...payload],
        };

        dispatch({
            type: 'cart/ReadCartContents',
            payload,
        });
    } catch (error) {
        console.error(error);
    }
};

export const Update_QuantityCartContents =
    (order_id, quantity, product_id) => async (dispatch, getState) => {
        try {
            let payload = await api.UPDATE_CartQuantityContents(
                order_id,
                quantity,
                product_id
            );

            // Update the current state as well
            let { entities } = getState;
            entities = entities.map((cartItem) => {
                if (cartItem.product_id === product_id) {
                    cartItem.quantity = quantity;
                }
                return cartItem;
            });

            payload = {
                ...getState,
                entities,
            };

            dispatch({
                type: 'cart/UpdateQuantityCartContents',
                payload,
            });
        } catch (error) {
            console.error(error);
        }
    };

export const Delete_CartContents =
    (order_id, product_id) => async (dispatch, getState) => {
        try {
            let payload = await api.DELETE_CartContents(order_id, product_id);

            // Update the current state as well
            let { entities } = getState;
            entities = entities.filter(
                (cartItem) => cartItem.product_id !== product_id
            );

            payload = {
                ...getState,
                entities,
            };

            dispatch({
                type: 'order_details/DeleteCartContents',
                payload,
            });
        } catch (error) {
            console.error(error);
        }
    };

const initialState = {
    order_id: null,
    entities: [],
};

export default function cartReducer(cartContents = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case 'cart/CreateCartContents':
        case 'cart/ReadCartContents':
        case 'cart/UpdateQuantityCartContents':
        case 'cart/DeleteCartContents':
            return payload;
        default:
            return cartContents;
    }
}
