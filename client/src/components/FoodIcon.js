import React from 'react';

function FoodIcon(props) {
    return (
        <div className="d-flex flex-column align-items-center">
            <img
                src="/assets/img600.png"
                alt="Category"
                style={{ width: '80px' }}
            />
            <h4 className="z-text-brown">CATEGORY</h4>
        </div>
    );
}

export default FoodIcon;
