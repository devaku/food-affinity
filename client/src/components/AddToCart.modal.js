import { Modal } from 'react-bootstrap';

function AddToCartModal(props) {
    let {
        product,
        show,
        quantity,
        setShow,
        handleClose,
        handleQuantity,
        handleAddCart,
    } = props;

    return (
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
                        <h4 className="z-text-brown">{product.description}</h4>
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
                <button
                    className="z-btn"
                    value={product.id}
                    onClick={(e) => {
                        handleAddCart(e, quantity, setShow);
                    }}
                >
                    Add to Cart
                </button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddToCartModal;
