import React from 'react';
import FoodIcon from './FoodIcon';

function FoodOptions(props) {
    return (
        <div className="col food-options">
            <div className="d-flex flex-row flex-wrap justify-content-evenly align-items-center">
                <FoodIcon></FoodIcon>
                <FoodIcon></FoodIcon>
                <FoodIcon></FoodIcon>
                <FoodIcon></FoodIcon>
                <FoodIcon></FoodIcon>
                <FoodIcon></FoodIcon>
                <FoodIcon></FoodIcon>
            </div>
        </div>
    );
}

export default FoodOptions;
