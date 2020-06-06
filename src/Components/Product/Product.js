import React from 'react';

const Product = (props) => {
    console.log(props.product);
    return (
        <div>
            <h3>This is Product</h3>
            <h3>{props.product.name}</h3>
            
        </div>
    );
};

export default Product;