import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../fakedb";

const Order = () => {
    const addedCartProduct = useLoaderData();
    const [cart, setCart]=useState(addedCartProduct);

    const handelReviewRemove = (id)=>{
        const remaining = cart.filter(pd=>pd.id != id);
        setCart(remaining);
        removeFromDb(id);
    }

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-4">
        {
            cart.map(prduct => <ReviewItem product={prduct} handelReviewRemove={handelReviewRemove}></ReviewItem>)
        }
      </div>
      <div className="col-span-1 bg-slate-300">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
<h1>this is order page</h1>;
