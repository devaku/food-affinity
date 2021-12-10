import React, { useEffect, useState } from 'react';

// Features
import { Read_AllCategories } from '../features/categories.features';
import {
    Create_PaymentDetails,
    Read_PaymentDetails,
} from '../features/payment_details.features';
import {
    Create_OrderDetails,
    Read_OrderDetails,
} from '../features/order.features';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryBar from '../components/CategoryBar';
import FoodOptions from '../components/FoodOptions';

// CSS
import '../css/Menu.css';

// Services
import { GetLocalStorage } from '../services/utility';

function GetCategoryName(categories, product_id) {
    return categories.find((category) => category.id === product_id);
}

function Menu() {
    const dispatch = useDispatch();
    let [categoryName, setCategoryName] = useState('');

    // DEBUG
    const user_id = 1;

    let categories = useSelector((state) => state.categories.entities);
    let products = useSelector((state) => state.products.entities);
    let payment_details = useSelector((state) => state.payment_details);
    let orders = useSelector((state) => state.orders);

    // Run on startup
    /**
     * MULTIPLE THINGS HAPPEN ON STARTUP
     * Load all the categories from the backend
     * Read PaymentDetails of User
     * - if it doesn't exist: create a Payment Details transaction for the user
     * Create a Order Details for the user
     * - if it doesn't exist: create
     *
     * There's probably a better, smarter way to do this
     * But I'm too dumb to figure that out by myself
     */
    useEffect(() => {
        dispatch(Read_AllCategories);

        let zCookie = GetLocalStorage();
        if (zCookie.payment_details_id) {
            dispatch(Read_PaymentDetails(zCookie.payment_details_id));
        } else {
            dispatch(Create_PaymentDetails());
        }

        zCookie = GetLocalStorage();
        if (zCookie.order_id) {
            dispatch(Read_OrderDetails(zCookie.order_id));
        } else {
            let zCookie = GetLocalStorage();
            dispatch(Create_OrderDetails(user_id, zCookie.payment_details_id));
        }
    }, [dispatch]);

    // Update the Category Name on the top
    // Depending on what product is on display
    useEffect(() => {
        console.log('USE EFFECT 2');
        if (products.length > 0) {
            let { product_categoryid } = products[0];

            let category = GetCategoryName(categories, product_categoryid);

            if (category) {
                setCategoryName(category.name);
            }
        }
    }, [products]);

    return (
        <div className="backdrop d-flex flex-column">
            <Header categoryName={categoryName}></Header>
            <div className="menu d-flex py-2">
                <CategoryBar categories={categories}></CategoryBar>
                {/* <span className="col-sm"></span> */}
                <FoodOptions products={products}></FoodOptions>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Menu;
