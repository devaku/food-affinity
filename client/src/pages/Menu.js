import React, { useState } from 'react';

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import CategoryBar from '../components/CategoryBar';
import FoodOptions from '../components/FoodOptions';

// CSS
import '../css/Menu.css';

function Menu() {
    // Debug for now
    let [categories, setCategories] = useState([
        {
            id: 1,
            name: 'Chicken',
            description: '',
            created_at: '2021-11-25T03:22:51.295Z',
            updated_at: '2021-11-25T03:22:51.295Z',
        },
        {
            id: 2,
            name: 'Burger',
            description: '',
            created_at: '2021-11-25T03:22:51.296Z',
            updated_at: '2021-11-25T03:22:51.296Z',
        },
        {
            id: 3,
            name: 'Drinks',
            description: '',
            created_at: '2021-11-25T03:22:51.297Z',
            updated_at: '2021-11-25T03:22:51.297Z',
        },
    ]);
    let [products, setProducts] = useState([
        {
            id: 1,
            product_categoryid: 1,
            quantity: 10,
            name: '1PC Fried Chicken',
            description: 'The dependable classic',
            created_at: '2021-11-25T03:22:51.297Z',
            updated_at: '2021-11-25T03:22:51.297Z',
            price: '100.00',
        },
        {
            id: 2,
            product_categoryid: 1,
            quantity: 10,
            name: '2pc Fried Chicken',
            description: 'The sequel to the classic!',
            created_at: '2021-11-25T03:22:51.299Z',
            updated_at: '2021-11-25T03:22:51.299Z',
            price: '200.00',
        },
        {
            id: 3,
            product_categoryid: 1,
            quantity: 10,
            name: 'Deluxe Fried Chicken',
            description: 'The classic, new and improved!',
            created_at: '2021-11-25T03:22:51.299Z',
            updated_at: '2021-11-25T03:22:51.299Z',
            price: '250.00',
        },
        {
            id: 4,
            product_categoryid: 2,
            quantity: 10,
            name: 'Bun Burger',
            description: 'Burger in a bun!',
            created_at: '2021-11-25T03:22:51.300Z',
            updated_at: '2021-11-25T03:22:51.300Z',
            price: '100.00',
        },
        {
            id: 5,
            product_categoryid: 2,
            quantity: 10,
            name: 'Pan Burger',
            description: 'Burger in a pan!',
            created_at: '2021-11-25T03:22:51.300Z',
            updated_at: '2021-11-25T03:22:51.300Z',
            price: '100.00',
        },
        {
            id: 6,
            product_categoryid: 3,
            quantity: 10,
            name: 'Cola-Coca',
            description: 'A fizzy drink',
            created_at: '2021-11-25T03:22:51.301Z',
            updated_at: '2021-11-25T03:22:51.301Z',
            price: '20.00',
        },
        {
            id: 7,
            product_categoryid: 3,
            quantity: 10,
            name: 'Water',
            description: 'Simple, elegant, wet',
            created_at: '2021-11-25T03:22:51.301Z',
            updated_at: '2021-11-25T03:22:51.301Z',
            price: '20.00',
        },
        {
            id: 8,
            product_categoryid: 3,
            quantity: 10,
            name: 'Arise',
            description: 'The drink that has a kick',
            created_at: '2021-11-25T03:22:51.301Z',
            updated_at: '2021-11-25T03:22:51.301Z',
            price: '40.00',
        },
    ]);
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
