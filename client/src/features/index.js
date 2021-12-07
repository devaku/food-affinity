import { combineReducers } from 'redux';
import productReducer from './products.features';
import categoriesFeatures from './categories.features';

const allReducers = combineReducers({
    products: productReducer,
    categories: categoriesFeatures,
});

export default allReducers;
