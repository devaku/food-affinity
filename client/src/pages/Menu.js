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

function Menu() {
    const dispatch = useDispatch();
    let categories = useSelector((state) => state.categories);
    let products = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(Read_AllCategories);
        dispatch(Read_SomeProducts(1));
    }, [dispatch]);

    return (
        <div className="backdrop d-flex flex-column">
            <Header></Header>
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
