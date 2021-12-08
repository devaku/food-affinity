import React from 'react';
import FoodIcon from './FoodIcon';

import { useSelector } from 'react-redux';

function CategoryBar(props) {
    let categoriesStatus = useSelector((state) => state.categories.status);

    // Loading Bar
    // There should be a better way to do this. Ugh
    if (categoriesStatus === 'loading') {
        return (
            <div className="col-auto">
                <div>
                    <div className="category-bar container d-flex flex-column text-center">
                        <h3 className="z-text-brown">MENU</h3>
                        <div className="flex-grow-1 d-flex flex-column justify-content-center">
                            <div
                                className="d-flex justify-content-center align-items-center"
                                style={{ height: '100px' }}
                            >
                                <div style={{ margin: 0 }} className="loader" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Normal behavior
    return (
        <div className="col-auto">
            <div>
                <div className="category-bar container d-flex flex-column text-center">
                    <h3 className="z-text-brown">MENU</h3>
                    <div className="z-scrollbar category-bar-items">
                        {props.categories.map((category) => {
                            return (
                                <FoodIcon
                                    category={category}
                                    key={category.id}
                                ></FoodIcon>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryBar;
