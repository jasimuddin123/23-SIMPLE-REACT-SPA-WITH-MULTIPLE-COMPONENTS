import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Products.css';

const Product = (props) => {
    // console.log(props);
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
                <button className="main-button" onClick={()=> props.handleAddProduct(props.product)}
                 ><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>Buy Now</button>
            </div>

        </div>
    );
};

export default Product;