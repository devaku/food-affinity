import { combineReducers } from 'redux';
import productReducer from './products.features';
import categoriesFeatures from './categories.features';
import cartReducer from './cart.features';
import order_detailsReducer from './order.features';
import payment_detailsReducer from './payment_details.features';

const allReducers = combineReducers({
    products: productReducer,
    categories: categoriesFeatures,
    cart: cartReducer,
    orders: order_detailsReducer,
    payment_details: payment_detailsReducer,
});

export default allReducers;
