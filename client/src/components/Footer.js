import React from 'react';

function Footer(props) {
    return (
        <div className="flex-grow-1 d-flex flex-column">
            <div className="footer mb-2">
                <div className="d-flex flex-row justify-content-center">
                    <div className="footer-width">
                        {/* LABEL */}
                        <div className="d-flex flex-row justify-content-between py-2">
                            <div className="ms-3 z-text-brown">
                                <h3>Your Order</h3>
                            </div>

                            <div className="me-3">
                                <button className="z-btn">View Cart</button>
                            </div>
                        </div>
                        <div className="cart z-scrollbar">
                            {/* CART */}
                            <div className="d-flex flex-row justify-content-evenly align-items-center">
                                <h5 className="z-text-orange mx-2">1x</h5>

                                {/* CART ITEMS */}
                                <div className="cart-item d-flex flex-row p-2 my-2 align-items-center rounded">
                                    <div className="d-flex flex-row justify-content-evenly align-items-center  flex-grow-1">
                                        <img
                                            src="/assets/img600.png"
                                            alt="Category"
                                        />
                                        <h5 className="text-center">
                                            Deluxe Fried Chicken
                                        </h5>
                                    </div>
                                    <div className="flex-grow-1 text-end ms-2">
                                        <h5>Php 100</h5>
                                    </div>
                                </div>
                                <div className="mx-2">
                                    <button className="z-btn">Edit</button>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-evenly align-items-center">
                                <h5 className="z-text-orange mx-2">1x</h5>

                                {/* CART ITEMS */}
                                <div className="cart-item d-flex flex-row p-2 my-2 align-items-center rounded">
                                    <div className="d-flex flex-row justify-content-evenly align-items-center  flex-grow-1">
                                        <img
                                            src="/assets/img600.png"
                                            alt="Category"
                                        />
                                        <h5 className="text-center">
                                            Deluxe Fried Chicken
                                        </h5>
                                    </div>
                                    <div className="flex-grow-1 text-end ms-2">
                                        <h5>Php 100</h5>
                                    </div>
                                </div>
                                <div className="mx-2">
                                    <button className="z-btn">Edit</button>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-evenly align-items-center">
                                <h5 className="z-text-orange mx-2">1x</h5>

                                {/* CART ITEMS */}
                                <div className="cart-item d-flex flex-row p-2 my-2 align-items-center rounded">
                                    <div className="d-flex flex-row justify-content-evenly align-items-center  flex-grow-1">
                                        <img
                                            src="/assets/img600.png"
                                            alt="Category"
                                        />
                                        <h5 className="text-center">
                                            Deluxe Fried Chicken
                                        </h5>
                                    </div>
                                    <div className="flex-grow-1 text-end ms-2">
                                        <h5>Php 100</h5>
                                    </div>
                                </div>
                                <div className="mx-2">
                                    <button className="z-btn">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CHECKOUT BUTTONS */}
            <div className="checkout flex-grow-1 d-flex flex-column justify-content-center align-items-center">
                <div className="footer-width d-flex flex-row justify-content-evenly align-items-center h-100">
                    <div>
                        <button className="z-btn">View Cart</button>
                    </div>
                    <div className="flex-grow-1 mx-2">
                        <button className="z-btn">View Cart</button>
                    </div>
                    <div>
                        <button className="z-btn">View Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
