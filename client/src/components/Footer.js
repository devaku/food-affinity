import React from 'react';
import CartItem from './CartItem';

function Footer(props) {
    let { cart, productReference, handleEditCart, handleRemoveItem } = props;

    let jsxCart;

    if (cart.order_id && cart.entities.length > 0) {
        jsxCart = cart.entities.map((cartItem, index) => {
            return (
                <CartItem
                    cartItem={cartItem}
                    key={`ci-${cartItem.id}`}
                    handleEditCart={handleEditCart}
                    handleRemoveItem={handleRemoveItem}
                ></CartItem>
            );
        });
    } else {
        jsxCart = (
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h3 className="z-text-brown">Cart is empty!</h3>
            </div>
        );
    }

    return (
        <div className="flex-grow-1 d-flex flex-column">
            <div className="footer mb-2">
                <div className="d-flex flex-row justify-content-center">
                    <div className="footer-width">
                        {/* LABEL */}
                        <div className="d-flex flex-row justify-content-center py-2">
                            <div className="ms-3 z-text-brown">
                                <h3>Your Order</h3>
                            </div>

                            {/* <div className="me-3">
                                <button className="z-btn">View Cart</button>
                            </div> */}
                        </div>
                        <div className="cart z-scrollbar">{jsxCart}</div>
                    </div>
                </div>
            </div>

            {/* CHECKOUT BUTTONS */}
            <div className="checkout flex-grow-1 d-flex flex-column justify-content-center align-items-center">
                <div className="footer-width d-flex flex-row justify-content-evenly align-items-center h-100">
                    <div className="flex-grow-1 mx-2">
                        <button
                            onClick={props.handleCheckout}
                            className="z-btn"
                        >
                            Checkout TOTAL: {props.total}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
