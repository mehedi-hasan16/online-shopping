import React, { useEffect, useState } from 'react';
import products from '../Products-data/products.json'
import Product from '../Product/Product';

const Shop = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        setData(products)
    },[])
    return (
        <div className='grid grid-cols-3 gap-7 m-7'>
            {
                data.map(product=><Product product={product} key={product.id}></Product>)
            }
        </div>
    );
};

export default Shop;