import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const {user, logOut} =useContext(AuthContext);
    const handleLogOut =()=>{
        logOut()
        .then(()=>{})
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className='flex justify-between items-center bg-slate-400 p-3'>
            <div>
                <h1 className='text-4xl font-bold text-white'>China Shop</h1>
            </div>
            <div className='text-white font-semibold'>
                <Link className='mr-5' to='/'>Home</Link>
                <Link className='mr-5' to='/order'>Order</Link>
                <Link className='mr-5' to='/manageInventory'>Manage Inventory</Link>
                <Link className='mr-5' to='/signup'>Sign up</Link>
                <Link className='mr-5' to='/login'>Login</Link>
                {
                    user&& <span>{user.email} <button onClick={handleLogOut} className='bg-red-600 rounded p-2 font-bold text-white my-3'>logOut</button></span>
                }
            </div>
        </div>
    );
};

export default Header;