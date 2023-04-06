import React from 'react';

const Product = ({product}) => {
    const {img, name, price, seller, ratings }= product;
    return (
        <div className='bg-white rounded-md shadow-md relative w-80 h-96'>
            <img src={img} alt="" className='w-full h-48 object-cover rounded-md'/>
            <div className='p-3'>
                <p className='text-2xl font-semibold'>{name}</p>
                <p className='font-semibold'>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button className='bg-yellow-500 rounded p-2 font-bold text-white w-full absolute bottom-0'>Add to Cart</button>
        </div>
    );
};

export default Product;