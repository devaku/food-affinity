import React, { useState } from 'react';

import AddToCartModal from './AddToCart.modal';

function FoodDetail(props) {
    let { product, handleAddCart } = props;

    // Modal controls
    const [show, setShow] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleQuantity = (e) => {
        let { name } = e.target;
        if (name === 'increment') {
            setQuantity(quantity + 1);
        } else {
            if (quantity > 0) {
                setQuantity(quantity - 1);
            }
        }
    };

    return (
        <div>
            <button className="z-btn-hidden" onClick={handleShow}>
                <div className="food-icon-product d-flex flex-column align-items-center">
                    <img
                        src="/assets/img600.png"
                        alt="Category"
                        style={{ width: '100%' }}
                    />
                    <h4 className="z-text-brown text-center text-wrap">
                        {product.name}
                    </h4>
                </div>
            </button>
            <AddToCartModal
                product={product}
                show={show}
                quantity={quantity}
                setShow={setShow}
                handleClose={handleClose}
                handleQuantity={handleQuantity}
                handleAddCart={handleAddCart}
            ></AddToCartModal>
        </div>
    );
}

export default FoodDetail;
