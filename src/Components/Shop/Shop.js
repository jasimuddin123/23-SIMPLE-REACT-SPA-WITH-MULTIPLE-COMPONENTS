import React, { useState } from 'react';
import fakeData from '../../fakeData';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(first10);
    return (
        <div>
            <h2>This is Shop</h2>
            <h3>Prduct:{products.length}</h3>

            <ul>
                {

                products.map(product =><li>{product.name}</li>)
                }
            </ul>

        </div>
    );
};

export default Shop;    