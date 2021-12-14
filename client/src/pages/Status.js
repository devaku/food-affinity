import React from 'react';
import { useParams } from 'react-router-dom';

function Status() {
    let params = useParams();
    console.log(params);
    return (
        <div>
            <p>HELLO WORLD</p>
        </div>
    );
}

export default Status;
