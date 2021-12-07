import React from 'react';

import FoodDetail from './FoodDetail';

function FoodIcon(props) {
    let { product, category } = props;
    return (
        <div className="">
            {product && <FoodDetail product={product}></FoodDetail>}
            {category && (
                <div
                    style={{ width: '100px' }}
                    className="d-flex flex-column align-items-center text-wrap"
                >
                    <img
                        src="/assets/img600.png"
                        alt="Category"
                        style={{ width: '80px' }}
                    />
                    <h4 className="z-text-brown text-center">
                        {category.name}
                    </h4>
                </div>
            )}
        </div>
    );
}

export default FoodIcon;
