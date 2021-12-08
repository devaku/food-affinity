import React from 'react';
import FoodIcon from './FoodIcon';
import { useSelector } from 'react-redux';

function FoodOptions(props) {
    let productStatus = useSelector((state) => state.products.status);

    if (productStatus === 'loading') {
        return (
            <div className="col d-flex align-items-center justify-content-center food-options z-scrollbar">
                <div className="loader" />
            </div>
        );
    }

    return (
        <div className="col food-options z-scrollbar">
            <div className="d-flex food-options-container py-3">
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
