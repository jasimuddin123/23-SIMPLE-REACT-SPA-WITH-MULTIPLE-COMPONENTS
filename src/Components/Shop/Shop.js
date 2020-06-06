import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';

const Shop = () => {


    const first10 = fakeData.slice(0, 10);

    const [products, setproduct] = useState(first10);



    return (
        <div className="shop-container">
            <div className="product-container">
                <h3>Product:{products.length}</h3>
                <ul>
                    {
                        products.map(product => <li>{product.name}</li>)
                    }
                </ul>


            </div>

            <div className="cart-container">
                    <h3>This is Cart</h3>
            </div>

        </div>
    );
};

export default Shop;