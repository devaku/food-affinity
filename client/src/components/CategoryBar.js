import React from 'react';
import FoodIcon from './FoodIcon';

function CategoryBar(props) {
    return (
        <div className="col-auto">
            <div>
                <div className="category-bar container d-flex flex-column text-center">
                    <h3 className="z-text-brown">MENU</h3>
                    <div className="z-scrollbar d-flex category-bar-items">
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
