import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import HeartButton from '../../HeartButton/HeartButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import "../CategoryBox.scss";

const Card = ({ item, path }) => {
  const cardRef = useRef(null);
  const isLogged = sessionStorage.getItem("isLogged");
  const location = useLocation();

  const newPrice = () => {
    switch (location.pathname) {
      case '/shop/bestsellers':
        return item.price * 0.95;
      default:
        return item.price * 0.9;

    }
  }


  useEffect(() => {
    const card = cardRef.current;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        card.classList?.add('transform');
      }
    })
    observer.observe(card);
  })
  useEffect(() => {
    const card = cardRef.current;
    if (location.pathname === '/shop/collection') {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) {
          card.classList?.remove('transform');
        }
      })
      observer.observe(card);
    }
  })

  return (
    <div className="card" ref={cardRef}>
      <img src={item.images[0]} alt="coat" />
      <span className="card__rate">
        {item.rate}
        <FontAwesomeIcon icon={faStarHalfStroke} />
      </span>
      <div className="card__container">
        <div className="card__container__info">
          <p className="card__container__info-name">{item.name}</p>
          <div className="card__container__info__price">
            <p className="card__container__info__price-old"> <span>{item.price}</span>pln</p>
            <p className="card__container__info__price-new"> <span>{newPrice()}</span>pln</p>
          </div>
        </div>
        <div className="card__container__controls">
          <div>
            <Link to={path}>
              <button>buy now</button>
            </Link>
          </div>
          {isLogged === null ? <HeartButton /> : <HeartButton id={item.id} />}
        </div>
      </div>
    </div>
  );
};

export default Card;
