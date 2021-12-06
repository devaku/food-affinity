import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetch_all } from '../actions/products.action';

function SignUp() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    useEffect(() => {
        dispatch(fetch_all());
    }, [dispatch]);
    return (
        <div>
            <p>SIGN UP PAGE</p>
            <div>{JSON.stringify(products)}</div>
        </div>
    );
}

export default SignUp;
