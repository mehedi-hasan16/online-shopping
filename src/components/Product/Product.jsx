import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Product = (props) => {
    const {img, name, price, seller, ratings }= props.product;
    const handelAddProduct = props.handelAddProduct;
    
    return (
        <div className='bg-white rounded-md shadow-md relative w-80 h-96'>
            <img src={img} alt="" className='w-full h-48 object-cover rounded-md'/>
            <div className='p-3'>
                <p className='text-2xl font-semibold'>{name}</p>
                <p className='font-semibold'>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={()=>handelAddProduct(props.product)} className='bg-yellow-500 rounded p-2 font-bold text-white w-full absolute bottom-0'>Add to Cart <FontAwesomeIcon icon={faCartShopping}/></button>
        </div>
    );
};

export default Product;