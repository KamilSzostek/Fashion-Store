import React, { useEffect, useRef, useState } from "react";
import "../Cart.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ListElement = ({
  id,
  image,
  name,
  price,
  count,
  color,
  size,
  products,
  setProducts,
  refreshNav,
}) => {
  const [countState, setCountState] = useState(count);

  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        element.classList.add('transform-100');
      }
    });
    observer.observe(element);
  });

  const handleCount = ({ target }) => {
    if (target.value >= 0) {
      const newCart = [...products].map((item) => {
        if (item.id === id && item.color === color && item.size === size)
          item.count = target.value;
        return item;
      });
      sessionStorage.setItem("cart", JSON.stringify(newCart));
      setCountState(target.value);
      setProducts(newCart);
    }
  };
  const handleRemove = () => {
    const newCart = [...products].filter(
      (item) => item.id !== id || item.color !== color || item.size !== size
    );
    sessionStorage.setItem("cart", JSON.stringify(newCart));
    sessionStorage.setItem("countOfProductsInCart", newCart.length);
    setProducts(newCart);
    refreshNav && refreshNav();
  };

  return (
    <li className="cart__shopping__list__element" >
      <div className="cart__shopping__list__element-gate" ref={elementRef}/>
      <img src={image} alt="coat" />
      <div className="cart__shopping__list__element__info">
        <h3>{name}</h3>
        <div className="cart__shopping__list__element__info__params">
          <span className="cart__shopping__list__element__info__params-size">{size}</span>
          <span className="cart__shopping__list__element__info__params-color">{color}</span>
          <span className="cart__shopping__list__element__info__params-price">{price}<span>pln</span></span>
          <label className="cart__shopping__list__element__info__params-count">
            <span>Count:</span>
            <input type="number" value={countState} onChange={handleCount} />
          </label>
        </div>
      </div>
      <button className="cart__shopping__list__element__remove" onClick={handleRemove}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </li>
  );
};

export default ListElement;
