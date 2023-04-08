import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center bg-slate-400 p-3'>
            <div>
                <h1 className='text-4xl font-bold text-white'>China Shop</h1>
            </div>
            <div className='text-white font-semibold'>
                <Link className='mr-5' to='/'>Home</Link>
                <Link className='mr-5' to='/order'>Order</Link>
                <Link className='mr-5' to='/manage-inventory'>Manage Inventory</Link>
                <Link className='mr-5' to='/login'>Login</Link>
            </div>
        </div>
    );
};

export default Header;