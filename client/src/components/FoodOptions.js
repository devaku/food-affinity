import React from 'react';
import FoodIcon from './FoodIcon';

function FoodOptions(props) {
    return (
        <div className="col food-options">
            <div className="d-flex flex-row flex-wrap justify-content-evenly py-3">
                {props.products.map((product) => {
                    return (
                        <FoodIcon product={product} key={product.id}></FoodIcon>
                    );
                })}
            </div>
        </div>
    );
}

export default FoodOptions;
