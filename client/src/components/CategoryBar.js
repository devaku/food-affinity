import React from 'react';
import FoodIcon from './FoodIcon';

function CategoryBar(props) {
    return (
        <div className="col-2">
            <div className="category-bar container-fluid d-flex flex-column text-center">
                <h3 className="z-text-brown">MENU</h3>
                <div className="d-flex flex-column">
                    <FoodIcon></FoodIcon>
                    <FoodIcon></FoodIcon>
                    <FoodIcon></FoodIcon>
                    <FoodIcon></FoodIcon>
                    <FoodIcon></FoodIcon>
                    <FoodIcon></FoodIcon>
                </div>
            </div>
        </div>
    );
}

export default CategoryBar;
