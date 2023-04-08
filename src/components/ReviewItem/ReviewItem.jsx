import React from "react";

const ReviewItem = ({ product, handelReviewRemove }) => {
  const {id, img, name, price, shipping } = product;
  return (
    <div className="flex border rounded w-1/2 items-center m-4">
    <img src={img} alt="" className="w-28 rounded p-2" />
      <div className="flex items-center w-full justify-between">
            <div>
            <p className="font-bold text-lg">{name}</p>
            <p>Price: <span className="text-yellow-500">{price}</span></p>
            <p>Shopping cost: <span className="text-yellow-500">{shipping}</span></p>
            </div>
        <div>
            <button onClick={()=>handelReviewRemove(id)} className="bg-red-500 p-4 rounded mr-3 font-bold text-2xl text-white">X</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
