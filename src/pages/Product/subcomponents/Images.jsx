import React, { useLayoutEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Images.scss";

const Images = ({ id, images }) => {
  const [imageNumber, setImageNumber] = useState(1);

  const imagesRef = useRef();
  const nextImgRef = useRef();
  const prevImgRef = useRef();

  useLayoutEffect(() => {
    setImageNumber(1);
    resetGallery();
  }, [id])

  const imgElements = images.map((item) => (
    <img
      key={images.indexOf(item)}
      className="product__card__images__container-img"
      src={item}
      alt=""
    />
  ));
  const changeImage = ({ target }) => {
    const button = target.parentNode;
    const images = [...imagesRef.current.querySelectorAll("img")].reverse();

    if (button.classList.contains("product__card__images__container__button-right")) {
      setImageNumber(imageNumber + 1);
      button.previousElementSibling?.classList.remove("d-none");
      for (const image of images) {
        if (!image.classList.contains("push-left")) {
          if (images.indexOf(image) === images.length - 2){
            button.classList.add("d-none");
          }
          image.classList.add("push-left");
          break;
        }
      }
    } else if (button.classList.contains("product__card__images__container__button-left")) {
      setImageNumber(imageNumber - 1);
      button.nextSibling?.classList.remove("d-none");
      for (const image of images.reverse()) {
        if (image.classList.contains("push-left")) {
          if (images.indexOf(image) === images.length - 1)
            button.classList.add("d-none");
          image.classList.remove("push-left");
          break;
        }
      }
    }
  };
  const resetGallery = () => {
    const images = [...imagesRef.current.querySelectorAll("img")];
    for (const image of images) image.classList.remove("push-left");
    nextImgRef.current.classList.remove("d-none");
    prevImgRef.current.classList.add("d-none");
  };
  return (
    <div className="product__card__images">
      <div className="product__card__images__container"  ref={imagesRef}>
        <span className="product__card__images__container-number">
          {imageNumber}/{images.length}
        </span>
        <button
          className="product__card__images__container__button product__card__images__container__button-left d-none"
          ref={prevImgRef}
        >
          <div className="bg-cover" onClick={changeImage} />
          <FontAwesomeIcon className="icon" icon={faChevronLeft} />
        </button>
        <button
          className="product__card__images__container__button product__card__images__container__button-right"
          ref={nextImgRef}
        >
          <div className="bg-cover" onClick={changeImage} />
          <FontAwesomeIcon className="icon" icon={faChevronRight} />
        </button>
        {imgElements}
      </div>
    </div>
  );
};

export default Images;
