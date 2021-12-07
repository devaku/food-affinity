import React from 'react';

// Features
import { Read_SomeProducts } from '../features/products.features';
import { useSelector, useDispatch } from 'react-redux';

// Components
import FoodDetail from './FoodDetail';

function FoodIcon(props) {
    let { product, category } = props;
    let dispatch = useDispatch();

    const handleClick = (e) => {
        let { value } = e.target;
        dispatch(Read_SomeProducts(value));
    };

    return (
        <div className="">
            {product && <FoodDetail product={product}></FoodDetail>}
            {category && (
                <button
                    value={category.id}
                    className="z-btn-hidden"
                    onClick={handleClick}
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
