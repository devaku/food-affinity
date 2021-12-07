import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Read_AllProducts } from '../features/products.features';

function SignUp() {
    let dispatch = useDispatch();

    // dispatch(Read_AllProducts);
    return (
        <div>
            <p>SIGN UP PAGE</p>
            <div
                style={{ maxWidth: '200px', overflowX: 'auto' }}
                className="d-flex flex-row"
            >
                <div
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: 'red',
                        border: '3px solid blue',
                    }}
                >
                    TEST
                </div>
                <div
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: 'red',
                        border: '3px solid blue',
                    }}
                >
                    HELLO WORLD
                </div>
                <div
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: 'red',
                        border: '3px solid blue',
                    }}
                ></div>
                <div
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: 'red',
                        border: '3px solid blue',
                    }}
                ></div>
            </div>
        </div>
    );
}

export default SignUp;
