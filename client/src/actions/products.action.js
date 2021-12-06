import * as api from '../api';

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
