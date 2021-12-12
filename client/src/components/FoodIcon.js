import React from 'react';

// Components
import FoodDetail from './FoodDetail';

function FoodIcon(props) {
    let { product, category, handleCategoryClick, handleAddCart } = props;

    return (
        <div className="">
            {product && (
                <FoodDetail
                    product={product}
                    handleAddCart={handleAddCart}
                ></FoodDetail>
            )}
            {category && (
                <button
                    value={category.id}
                    className="z-btn-hidden"
                    onClick={handleCategoryClick}
                >
                    <div
                        style={{ width: '100px', pointerEvents: 'none' }}
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
                </button>
            )}
        </div>
    );
}

export default FoodIcon;
