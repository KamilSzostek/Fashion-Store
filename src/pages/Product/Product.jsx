import React, { useState, useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import SelectBtn from "./subcomponents/SelectBtn";
import Button from '../../pages/Product/subcomponents/Button';
import Images from "./subcomponents/Images";
import ChoiceModal from "../../components/ChoiceModal/ChoiceModal";
import InfoModal from "../../components/InfoModal/InfoModal";
import SimilarProducts from "./subcomponents/SimilarProducts";
import Description from "./subcomponents/Description";
import Rate from "./subcomponents/Rate";
import HeartButton from "../../components/HeartButton/HeartButton";
import { useGetProduct } from "../../hooks/useGetProduct";
import { refreshNav } from "../../components/Navigation/Navigation";
import {
  faCartShopping,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import './subcomponents/Selects.scss';
import "./Product.scss";


const Product = () => {
  const isLogged = sessionStorage.getItem("isLogged");

  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [count, setCount] = useState(1);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isChoiceModalOpen, setIsChoiceModalOpen] = useState(false);
  const handleCount = ({ target }) => setCount(target.value);

  const sizesRef = useRef();
  const colorsRef = useRef();

  const navigate = useNavigate();
  const product = useGetProduct();

  const handleAddProduct = () => {
    if (isLogged === null) {
      setIsInfoModalOpen(true);
      return;
    }
    let cart = [];
    if (sessionStorage.getItem("cart") !== null) {
      cart = JSON.parse(sessionStorage.getItem("cart"));
      cart = cart.filter(
        (item) =>
          item.id !== product.id || item.size !== size || item.color !== color
      );
    }
    const productToAdd = {
      id: product.id,
      img: product.images[0],
      name: product.name,
      price: product.price,
      size,
      color,
      count,
    };
    cart.push(productToAdd);
    const cartJSON = JSON.stringify(cart);
    sessionStorage.setItem("countOfProductsInCart", cart.length);
    sessionStorage.setItem("cart", cartJSON);
    setIsChoiceModalOpen(true);
    refreshNav();
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    const colors = colorsRef.current.querySelectorAll(".select");
    const sizes = sizesRef.current.querySelectorAll(".select");

    for (const select of colors) {
      select.style.color = "";
      select.style.backgroundColor = "";
    }
    for (const select of sizes) {
      select.style.color = "";
      select.style.backgroundColor = "";
    }
    setColor('');
    setSize('')
  }, [product.id]);

  const closeInfoModal = () => setIsInfoModalOpen(false);
  const closeChoiceModal = () => setIsChoiceModalOpen(false);


  const handleSelect = ({ target }) => {
    if (target.style.color === "") {
      const selects = target.parentNode.querySelectorAll(".select");
      for (const select of selects) {
        select.style.color = "";
        select.style.backgroundColor = "";
      }
      if (target.parentNode.classList.contains("product__card__sizes")) {
        target.style.backgroundColor = "var(--third-color)";
        setSize(target.innerText);
      } else {
        target.style.backgroundColor = "var(--fourth-color)";
        setColor(target.innerText);
      }
      target.style.color = "var(--white-color)";
    } else {
      target.parentNode.classList.contains("product__card__sizes")
        ? setSize("")
        : setColor("");
      target.style.color = "";
      target.style.backgroundColor = "";
    }
  };

  const colors = product.colors.map((item) => (
    <SelectBtn
      key={product.colors.indexOf(item)}
      item={item}
      handleSelect={handleSelect}
    />
  ));

  const sizes = product.sizes.map((item) => (
    <SelectBtn
      key={product.sizes.indexOf(item)}
      item={item}
      handleSelect={handleSelect}
    />
  ));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="product__bg" />

      <div className="product">
        <div className="product__card">
          <h4 className="product__card__name">{product.name}</h4>
          {isLogged &&
            <div className="product__card__fav">
              <h5>add fav</h5>
              <HeartButton id={product.id} />
            </div>}
          <Images
            id={product.id}
            images={product.images}
          />

          <Description />
          <label className="product__card__count">
            <span>Count:</span>
            <input type="number" value={count} min={0} max={99} onChange={handleCount} />
          </label>
          <div className="product__card__price">
            {product.price} <span>PLN</span>
          </div>
          <div className="product__card__colors" ref={colorsRef}>
            {colors}
          </div>
          <div className="product__card__sizes" ref={sizesRef}>
            {sizes}
          </div>
          <Rate id={product.id} />
          <div className="product__card__buttons">
            <Button classes='product__card__buttons-back' icon={faArrowLeft} click={() => navigate(-1)} />
            {size === "" || color === "" ? (
              <Button classes='product__card__buttons-cart btn-disabled' icon={faCartShopping} />
            ) : (
              <Button classes='product__card__buttons-cart' icon={faCartShopping} click={handleAddProduct} />
            )}
          </div>
          <InfoModal
            info="You must be logged in to add a product"
            isOpen={isInfoModalOpen}
            closeModal={closeInfoModal}
          />
          <ChoiceModal
            path="/cart"
            question="Product successfully added. Do you want go to shopping-cart"
            isOpen={isChoiceModalOpen}
            closeModal={closeChoiceModal}
          />
        </div>
        <SimilarProducts similar={product.similar} />
      </div>
    </motion.div>
  );
};

export default Product;
