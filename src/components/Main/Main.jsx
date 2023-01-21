import React, { useRef, useState } from "react";
import { Routes, Route } from "react-router";
import { AnimatePresence } from "framer-motion";
import Start from "../../pages/Start/Start";
import SignUp from '../../pages/SignUp/SignUp';
import Shop from "../../pages/Shop/Shop";
import ShopPromo from "../../pages/ShopPromo/ShopPromo";
import Collection from "../../pages/Collection/Collection";
import Product from "../../pages/Product/Product";
import Cart from "../../pages/Cart/Cart";
import "./Main.scss";

export let refreshMain

const Main = () => {
  const [refresh, setRefresh] = useState(false);
  refreshMain = () => setRefresh(!refresh);

  const mainRef = useRef();
  mainRef?.current && mainRef.current.scrollIntoView();

  return (
      <main className="main-section" ref={mainRef}>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Start />} exact />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/new" element={<ShopPromo />} />
            <Route path="/shop/bestsellers" element={<ShopPromo />} />
            <Route path="/shop/collection" element={<Collection />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop/product/:id" element={<Product />} />
          </Routes>
        </AnimatePresence>
      </main>
  );
};

export default Main;