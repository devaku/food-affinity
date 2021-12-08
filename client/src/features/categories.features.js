import * as api from '../api';

export const Read_AllCategories = async (dispatch, getState) => {
    try {
        dispatch({
            type: 'categories/Loading',
        });
        const payload = await api.READ_AllCategories();
        dispatch({
            type: 'categories/ReadAll',
            payload,
        });
    } catch (error) {
        console.error(error);
    }
};

const initialState = {
    status: 'idle',
    entities: [],
};

export default function categoriesFeatures(categories = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case 'categories/Loading':
            return {
                ...categories,
                status: 'loading',
            };
        case 'categories/ReadAll':
            return {
                status: 'idle',
                entities: payload,
            };
        default:
            return categories;
    }
}
