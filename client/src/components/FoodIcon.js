import React from 'react';

function FoodIcon(props) {
    let { product, category } = props;
    return (
        <div className="">
            {product && (
                <div className="food-icon-product d-flex flex-column align-items-center">
                    <img
                        src="/assets/img600.png"
                        alt="Category"
                        style={{ width: '200px' }}
                    />
                    <h4 className="z-text-brown text-center text-wrap">
                        {product.name}
                    </h4>
                </div>
            )}
            {category && (
                <div className="d-flex flex-column align-items-center text-wrap">
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
