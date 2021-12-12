import React, { useState } from 'react';
import EditCartItem from './EditCartItem.modal';

function CartItem(props) {
    let { quantity } = props.cartItem;
    let { name, price } = props.productReference;
    let { handleEditCart, handleRemoveItem } = props;

    // Modal controls
    const [show, setShow] = useState(false);
    const [eQuantity, seteQuantity] = useState(parseInt(quantity));

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleQuantity = (e) => {
        let { name } = e.target;
        if (name === 'increment') {
            seteQuantity(quantity + 1);
        } else {
            if (quantity > 0) {
                seteQuantity(quantity - 1);
            }
        }
    };
    return (
        <div className="d-flex flex-row justify-content-evenly align-items-center">
            <h5 className="z-text-orange mx-2">{parseInt(quantity)}x</h5>
            <div className="cart-item d-flex flex-row p-2 my-2 justify-content-between align-items-center rounded">
                <img
                    src="/assets/img600.png"
                    alt="Category"
                    className=""
                    style={{ width: '80px' }}
                />
                <h5 className="text-center">{name}</h5>
                <div className=" text-end ms-2">
                    <h5>Php {price}</h5>
                </div>
            </div>
            <div className="mx-2">
                <button className="z-btn" onClick={handleShow}>
                    Edit
                </button>
            </div>
            <EditCartItem
                product={props.productReference}
                show={show}
                quantity={eQuantity}
                setShow={setShow}
                handleClose={handleClose}
                handleQuantity={handleQuantity}
                handleEditCart={handleEditCart}
                handleRemoveItem={handleRemoveItem}
            ></EditCartItem>
        </div>
    );
}

export default CartItem;
