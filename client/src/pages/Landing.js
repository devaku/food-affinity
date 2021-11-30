import React from 'react';
import '../css/Landing.css';
import '../css/z.ui.css';

class Landing extends React.Component {
    render() {
        return (
            <div id="landing" className="light-blue">
                <div
                    className="container landing-center"
                    style={{ height: '100vh' }}
                >
                    <img
                        className="fa-logo"
                        src="/assets/foodaffinity_logo.svg"
                        alt="Food Affinity"
                    />
                    <div className="yellow-text fa-title-text-position">
                        <h3 className="fa-title-text">Food Affinity</h3>
                    </div>
                    <div
                        className="z-btn-group z-flex-center-column-space"
                        style={{ width: '100%', height: '200px' }}
                    >
                        <button className="z-btn z-btn-xx-large">
                            Order Now
                        </button>
                        <button className="z-btn z-btn-xx-large">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
