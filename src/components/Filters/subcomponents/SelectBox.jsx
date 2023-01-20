import React, { useEffect } from "react";
import Select from "../../Select/Select";
import Sliders from "../../Sliders/Sliders";
import "../Filters.scss";

const SelectBox = ({
  head,
  sizes,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  color,
  setColor,
  size,
  setSize,
}) => {

  useEffect(() => setSize(''), [sizes])

  const colors = [
    "white",
    "black",
    "red",
    "brown",
    "green",
    "blue",
    "yellow",
    "purple",
    "gray",
  ];
  const sizeOptions = sizes?.map((item) => <option key={item}>{item}</option>);
  const colorOptions = colors?.map((item) => <option key={item}>{item}</option>);

  const handleSelectOnChange = ({ target }) => {
    target.id === "color" && setColor(target.value);
    target.id === "size" && setSize(target.value);
  };

  const handlePriceOnChange = ({ target }) => {
    target.id === "max" && setMaxPrice(target.value);
    target.id === "min" && setMinPrice(target.value);
  };
  const chooseBox = () => {
    switch (head) {
      case "size":
        return (
          <Select id='size' values={size} options={sizeOptions} handleSelectOnChange={handleSelectOnChange} />
        );
      case "color":
        return (
          <Select id='color' values={color} options={colorOptions} handleSelectOnChange={handleSelectOnChange} />
        );
      case "price":
        return (
          <Sliders type='min' minPrice={minPrice} maxPrice={maxPrice} handlePriceOnChange={handlePriceOnChange} />
        );
      default:
        return null;
    }
  };
  return (
    <div className="filters__container__box">
      <h4 className="filters__container__box__head">{head}</h4>
      <div className="filters__container__box__selects">{chooseBox()}</div>
    </div>
  );
};

export default SelectBox;
