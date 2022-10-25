import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const singleInfo = useLoaderData()
    console.log(singleInfo)
    return (
        <div>
            <h1>this is check out</h1>
        </div>
    );
};

export default CheckOut;