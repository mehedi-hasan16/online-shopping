import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Order = () => {
    const addedCartProduct = useLoaderData();
    const [cart, setCart]=useState(addedCartProduct);

    const handelReviewRemove = (id)=>{
        const remaining = cart.filter(pd=>pd.id != id);
        setCart(remaining);
        removeFromDb(id);
    }
    const handelClearCart= ()=>{
        setCart([]);
        deleteShoppingCart();
    }

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-4">
        {
            cart.map(prduct => <ReviewItem product={prduct} handelReviewRemove={handelReviewRemove}></ReviewItem>)
        }
      </div>
      <div className="col-span-1 bg-slate-300">
        <Cart cart={cart} handelClearCart={handelClearCart}>
        <Link to='/manageInventory'> 
          <button className='bg-yellow-500 rounded p-2 font-bold text-white w-full'>Check Out <FontAwesomeIcon icon={faArrowRight}/> 
          </button>
          </Link>
          
        </Cart>
      </div>
    </div>
  );
};

export default Order;
<h1>this is order page</h1>;
