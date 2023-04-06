import React, { useEffect, useState } from "react";
import products from "../Products-data/products.json";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setData(products);
  }, []);

  const handelAddProduct = (product) => {
    let newCart = [];
    const exist = cart.find((pd) => pd.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity += 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exist];
    }
    setCart(newCart);
  };
  return (
    <div className="grid grid-cols-5">
      <div className="grid grid-cols-3 gap-7 m-7 col-span-4">
        {data.map((product) => (
          <Product
            product={product}
            key={product.id}
            handelAddProduct={handelAddProduct}
          ></Product>
        ))}
      </div>
      <div className="col-span-1 bg-slate-300">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
