import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-between items-center bg-slate-400 p-3'>
            <div>
                <h1 className='text-4xl font-bold text-white'>China Shop</h1>
            </div>
            <div className='text-white font-semibold'>
                <a className='mr-5' href='/'>Home</a>
                <a className='mr-5' href='/order'>Order</a>
                <a className='mr-5' href='/order-review'>Order Review</a>
                <a className='mr-5' href='/manage-inventory'>Manage Inventory</a>
                <a className='mr-5' href='/login'>Login</a>
            </div>
        </div>
    );
};

export default Header;