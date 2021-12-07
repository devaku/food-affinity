import * as api from '../api';

export const Read_AllCategories = async (dispatch, getState) => {
    try {
        const payload = await api.READ_AllCategories();
        dispatch({
            type: 'categories/ReadAll',
            payload,
        });
    } catch (error) {
        console.error(error);
    }
};

export default function categoriesFeatures(categories = [], action) {
    let { type, payload } = action;
    switch (type) {
        case 'categories/ReadAll':
            return payload;
        default:
            return categories;
    }
}
