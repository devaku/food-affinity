import * as api from '../api';

import { GetLocalStorage, SaveLocalStorage } from '../services/utility';

// Create payment
export const Create_PaymentDetails = () => async (dispatch, getState) => {
    try {
        // const initialState = {
        //     amount: 0,
        //     provider: 'NONE',
        //     status: 'NOTPAID',
        //     id: null,
        // };

        // Use default
        let payload = await api.CREATE_PaymentDetails(0, 'NONE', 'NOTPAID');

        let zCookie = GetLocalStorage();
        zCookie.payment_details_id = payload.id;
        SaveLocalStorage(zCookie);

        payload = payload.id;

        dispatch({
            type: 'payment_details/CreatePaymentDetails',
            payload,
        });
    } catch (error) {
        console.error(error);
    }
};

// Read User Transaction Details
export const Read_PaymentDetails =
    (payment_details_id) => async (dispatch, getState) => {
        try {
            let payload = await api.READ_PaymentDetails(payment_details_id);

            dispatch({
                type: 'payment_details/ReadPaymentDetails',
                payload,
            });
        } catch (error) {
            console.error(error);
        }
    };

/**
 * These updates need to be collated into just one function. >_>
 */
export const Update_StatusPaymentDetails =
    (payment_details_id, status) => async (dispatch, getState) => {
        try {
            const payload = await api.UPDATE_StatusPaymentDetails(
                payment_details_id,
                status
            );

            dispatch({
                type: 'payment_details/UpdateStatusPaymentDetails',
                payload,
            });
        } catch (error) {
            console.error(error);
        }
    };

export const Update_AmountPaymentDetails =
    (payment_details_id, amount) => async (dispatch, getState) => {
        try {
            const payload = await api.UPDATE_AmountPaymentDetails(
                payment_details_id,
                amount
            );

            dispatch({
                type: 'payment_details/UpdateAmountPaymentDetails',
                payload,
            });
        } catch (error) {
            console.error(error);
        }
    };

export const Update_ProviderPaymentDetails =
    (payment_details_id, provider) => async (dispatch, getState) => {
        try {
            const payload = await api.UPDATE_ProviderPaymentDetails(
                payment_details_id,
                provider
            );

            dispatch({
                type: 'payment_details/UpdateProviderPaymentDetails',
                payload,
            });
        } catch (error) {
            console.error(error);
        }
    };

const initialState = {
    amount: 0,
    provider: 'NONE',
    status: 'NOTPAID',
    id: null,
};
export default function payment_detailsReducer(
    payment_details = initialState,
    action
) {
    let { type, payload } = action;
    switch (type) {
        case 'payment_details/CreatePaymentDetails':
            return {
                ...payment_details,
                id: payload,
            };
        case 'payment_details/ReadPaymentDetails':
            return payload;

        case 'UpdateStatusPaymentDetails':
        case 'UpdateAmountPaymentDetails':
        case 'UpdateProviderPaymentDetails':
            return payment_details;
        default:
            return payment_details;
    }
}
