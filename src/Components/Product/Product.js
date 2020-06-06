import React from 'react';
import './Products.css';

const Product = (props) => {
    console.log(props.product);
    const { img, seller, name, stock } = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small> by: {seller}</small></p>
                <br/>
                <p><small>Only {stock} left in stock -Order soon</small></p>
            </div>

        </div>
    );
};

export default Product;