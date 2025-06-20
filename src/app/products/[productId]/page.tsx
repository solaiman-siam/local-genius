import React from 'react';

const ProductId = async ({params, searchParams}) => {

    const paramsValue = await params.productId;
    const searchParamsValue = await searchParams;

    console.log(paramsValue, searchParamsValue);

    return (
        <div>
            <h1>Hello from productId {paramsValue}</h1>
        </div>
    );
};

export default ProductId;