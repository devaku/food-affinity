import { combineReducers } from 'redux';
import productReducer from './products.features';

const allReducers = combineReducers({
    products: productReducer,
});

export default allReducers;
