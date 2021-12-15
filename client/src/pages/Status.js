import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Status() {
    const navigate = useNavigate();
    let params = useParams();
    let { status } = params;
    let image = '';
    let subtitle = '';
    if (status === 'success') {
        image = (
            <img
                src="/assets/checkmark-circle-svgrepo-com.svg"
                alt="Success!"
                style={{ width: '250px' }}
            />
        );
        subtitle = (
            <>
                Congratulations! Your order is now being processed.
                <br />
                Order again :D
            </>
        );
    } else {
        image = (
            <img
                src="/assets/error-svgrepo-com.svg"
                style={{ width: '250px' }}
                alt="Error"
            />
        );
        subtitle = (
            <>
                There was an error in processing your order.
                <br />
                Order again?
            </>
        );
    }

    const handleClick = () => {
        navigate('/menu');
    };

    useEffect(() => {
        // Clear the local storage
        localStorage.clear();
    }, []);

    return (
        <div className="status vh-100 d-flex flex-column align-items-center justify-content-center">
            <div className="">{image}</div>
            <h3 className="z-text-yellow">{status.toUpperCase()}</h3>
            <p className="fw-bold z-text-yellow text-center">{subtitle}</p>
            <div>
                <button onClick={handleClick} className="z-btn">
                    ORDER
                </button>
            </div>
        </div>
    );
}

export default Status;
