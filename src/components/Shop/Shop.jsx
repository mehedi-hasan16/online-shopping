import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons'
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../fakedb";
import { Link } from "react-router-dom";

const Shop = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
    .then(res=>res.json())
    .then(data=>setData(data))
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = data.find((product) => product._id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [data]);

  const handelAddProduct = (product) => {
    let newCart = [];
    const exist = cart.find((pd) => pd._id === product._id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity += 1;
      const remaining = cart.filter((pd) => pd._id !== product._id);
      newCart = [...remaining, exist];
    }
    setCart(newCart);
    addToDb(product._id);
  };

  const handelClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="grid grid-cols-5">
      <div className="grid grid-cols-3 gap-7 m-7 col-span-4">
        {data.map((product) => (
          <Product
            product={product}
            key={product._id}
            handelAddProduct={handelAddProduct}
          ></Product>
        ))}
      </div>
      <div className="col-span-1 bg-slate-300">
        <Cart 
        cart={cart} 
        handelClearCart={handelClearCart}>
          <Link to='/order'> 
          <button className='bg-yellow-500 rounded p-2 font-bold text-white w-full'>Review Order <FontAwesomeIcon icon={faArrowRight}/> 
          </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
