import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

function FoodDetail(props) {
    let { product } = props;

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
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                dialogClassName="width-90w"
                keyboard={false}
            >
                <Modal.Header
                    className="modal-food-details"
                    style={{ border: 'none' }}
                    closeButton
                >
                    <Modal.Title className="z-text-brown">
                        {product.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-food-details">
                    <div className="d-flex food-detail">
                        <img src="/assets/img600.png" alt="Category" />
                        <br />
                        <div className="d-flex food-detail-options">
                            {/* Description */}
                            <h4 className="z-text-brown">
                                {product.description}
                            </h4>
                            <br />
                            <div className="d-flex flex-row justify-content-evenly">
                                <button
                                    className="z-btn"
                                    name="decrement"
                                    onClick={handleQuantity}
                                >
                                    -
                                </button>
                                <input
                                    type="text"
                                    className="text-center"
                                    readOnly
                                    value={quantity}
                                />
                                <button
                                    name="increment"
                                    className="z-btn"
                                    onClick={handleQuantity}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer
                    style={{ border: 'none' }}
                    className="modal-footer d-flex justify-content-center"
                >
                    <button className="z-btn">Add to Cart</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default FoodDetail;
