import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import EmptyCart from './subcompnents/EmptyCart';
import SomethingToBuy from "./subcompnents/SomethingToBuy";
import "./Cart.scss";

export let cartRefresh;
const Cart = () => {
  const cart = JSON.parse(sessionStorage.getItem("cart"));

  const [products, setProducts] = useState(cart);
  const [refresh, setRefresh] = useState(false);

  cartRefresh = () => setRefresh(!refresh);

  const navigate = useNavigate();
  useEffect(() => {
    const isLogged = sessionStorage.getItem("isLogged");
    if (products.length === 0 || isLogged === null)
      navigate('/shop');
  })

  const handleShowCart = () => {
    if (products === null || products.length === 0) {
      return (<EmptyCart />);
    }
    else return (<SomethingToBuy products={products} setProducts={setProducts} />)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <>
        <section className="cart" >
          <h2>Shopping list</h2>
          {handleShowCart()}
        </section>
      </>
    </motion.div>
  );
};

export default Cart;