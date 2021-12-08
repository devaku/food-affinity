import React, { useEffect, useState } from 'react';

// Features
import { Read_SomeProducts } from '../features/products.features';
import { Read_AllCategories } from '../features/categories.features';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryBar from '../components/CategoryBar';
import FoodOptions from '../components/FoodOptions';

// CSS
import '../css/Menu.css';

function GetCategoryName(categories, product_id) {
    return categories.find((category) => category.id === product_id);
}

function Menu() {
    const dispatch = useDispatch();
    let [categoryName, setCategoryName] = useState('');

    let categories = useSelector((state) => state.categories.entities);
    let products = useSelector((state) => state.products.entities);

    // Run on startup
    // Load all the categories
    // Load the products
    useEffect(() => {
        dispatch(Read_AllCategories);
        // dispatch(Read_SomeProducts(1));
        console.log('USE EFFECT 1');
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
