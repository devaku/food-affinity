import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Read_AllProducts } from '../features/products.features';

function SignUp() {
    let dispatch = useDispatch();

    dispatch(Read_AllProducts);
    return (
        <div>
            <p>SIGN UP PAGE</p>
            <div></div>
        </div>
    );
}

export default SignUp;
