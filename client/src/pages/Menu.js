import React, { useState } from 'react';

// Components
import Header from '../components/Header';
import CategoryBar from '../components/CategoryBar';
import FoodOptions from '../components/FoodOptions';

// CSS
import '../css/Menu.css';

function Menu() {
    let [categories, setCategories] = useState([]);
    return (
        <div className="backdrop">
            <Header></Header>
            <div className="d-flex flex-row py-3">
                <CategoryBar></CategoryBar>
                {/* <span className="col-sm"></span> */}
                <FoodOptions></FoodOptions>
            </div>
        </div>
    );
}

export default Menu;
