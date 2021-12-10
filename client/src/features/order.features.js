import * as api from '../api';

import { GetLocalStorage, SaveLocalStorage } from '../services/utility';

// Create an order transaction
export const Create_OrderDetails =
    (user_id, payment_id) => async (dispatch, getState) => {
        try {
            // const initialState = {
            //     id: null,
            //     user_id: null,
            //     total: 0,
            //     payment_id: null,
            // };

            let payload = await api.CREATE_OrderDetails(user_id, 0, payment_id);

            // Set the user_id, total, and payment_id as part of the state
            payload = {
                ...payload,
                user_id,
                total: 0,
                payment_id,
            };

            let zCookie = GetLocalStorage();
            zCookie.order_id = payload.id;
            SaveLocalStorage(zCookie);

            dispatch({
                type: 'order_details/CreateOrderDetails',
                payload,
            });
        } catch (error) {
            console.error(error);
        }
    };

export const Read_OrderDetails = (order_id) => async (dispatch, getState) => {
    try {
        const payload = await api.READ_OrderDetails(order_id);
        dispatch({
            type: 'order_details/ReadOrderDetails',
            payload,
        });
    } catch (error) {
        console.error(error);
    }
};

export const Update_TotalOrderDetails =
    (order_id, total, user_id) => async (dispatch, getState) => {
        try {
            let payload = await api.UPDATE_TotalOrderDetails(
                order_id,
                total,
                user_id
            );

            // Update the current state as well
            payload = {
                ...getState,
                total,
            };

            dispatch({
                type: 'order_details/UpdateTotalOrderDetails',
                payload,
            });
        } catch (error) {
            console.error(error);
        }
    };

export const Delete_OrderDetails =
    (order_id, user_id) => async (dispatch, getState) => {
        try {
            const payload = await api.DELETE_OrderDetails(user_id, order_id);
            dispatch({
                type: 'order_details/DeleteOrderDetails',
                payload,
            });
        } catch (error) {
            console.error(error);
        }
    };

const initialState = {
    id: null,
    user_id: null,
    total: 0,
    payment_id: null,
};

export default function order_detailsReducer(
    order_details = initialState,
    action
) {
    let { type, payload } = action;
    switch (type) {
        case 'order_details/CreateOrderDetails':
        case 'order_details/ReadOrderDetails':
        case 'order_details/UpdateTotalOrderDetails':
            return payload;

        // Revert back to initial state?
        case 'order_details/DeleteOrderDetails':
            return initialState;
        default:
            return order_details;
    }
}
