import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart}) => {
    console.log(cart);
    let totalPrice = 0;
    let quantiy= 0;
    let totalShipping = 0;
    for (const product of cart){
        totalPrice= totalPrice+ (product.price*product.quantity);
        totalShipping= totalShipping+product.shipping;
        quantiy=quantiy+product.quantity;
    }
    const tax= totalPrice *7/100;
    const grandTotal = totalPrice+totalShipping+tax;
    return (
        <div className='p-2 sticky top-0 right-0'>
            <h1 className='text-2xl font-semibold text-center mb-3'>Order Summary</h1>
            <p>Selected Item: {quantiy} </p>
            <p>Total Price: {totalPrice}</p>
            <p>Total Shipping Charge: {totalShipping}</p>
            <p>Tax: {tax}</p>
            <p className='text-lg font-semibold'>Grand Total: {grandTotal}</p>
            <button className='bg-red-600 rounded p-2 font-bold text-white w-full my-3'>Clear Cart <FontAwesomeIcon icon={faTrash}/></button>
            <button className='bg-yellow-500 rounded p-2 font-bold text-white w-full'>Review Order <FontAwesomeIcon icon={faArrowRight}/> </button>
        </div>
    );
};

export default Cart;