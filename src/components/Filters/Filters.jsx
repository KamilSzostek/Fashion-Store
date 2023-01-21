import React, { useState, useEffect, useRef, useContext } from "react";
import {StoreContext} from '../../store/StoreProvider';
import SelectBox from "./subcomponents/SelectBox";
import "./Filters.scss";

const Filters = ({ setProducts, handleReset }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [sizes, setSizes] = useState(null);
  const sizes1 = ["s", "m", "l", "xl", "xxl"];
  const sizes2 = [];

  const { collectionHer, collectionHim } = useContext(StoreContext);

  const selectCategoryRef = useRef(null);

  useEffect(() => {
    const smallestSize = 27;
    const largestSize = 50;
    for (let index = smallestSize; index <= largestSize; index++)
      sizes2.push(index);
  });

  const handleCollection = ({ target }) => {
    if (
      target.value === "shoes" ||
      target.value === "trousers" ||
      target.value === "shorts" ||
      target.value === "skirts"
    )
      setSizes(sizes2);
    else setSizes(sizes1);
  };

  const handleFilter = () => {
    let filteredProducts = [];
    const { current: selectCategory } = selectCategoryRef;
  
    if (selectCategory.value !== "") {
      filteredProducts = [...collectionHer, ...collectionHim].filter(
        (item) => item.category === selectCategory.value
      );
      filteredProducts = filteredProducts.filter(
        (item) => (item.price*0.9 <= maxPrice) && (item.price*0.9 >= minPrice)
      );
      if (size !== "")
        filteredProducts = filteredProducts.filter((item) =>
          item.sizes.includes(size)
        );
      if (color !== "")
        filteredProducts = filteredProducts.filter((item) =>
          item.colors.includes(color)
        );
    }

    setProducts(filteredProducts);
  };

  const handleResetStates = () => {
    setColor("");
    setSize("");
    setMinPrice(0);
    setMaxPrice(100);
    handleReset();
  };

  return (
    <section className="filters">
      <div className="filters__category">
        <span>Category:</span>
        <select
          className="select"
          ref={selectCategoryRef}
          onChange={handleCollection}
        >
          <option defaultValue></option>
          <option value="hats">hats</option>
          <option value="hoodies">hoodies</option>
          <option value="jackets">jackets</option>
          <option value="tshirts">tshirts</option>
          <option value="shirts">shirts</option>
          <option value="trousers">trousers</option>
          <option value="shorts">shorts</option>
          <option value="skirts">skirts</option>
          <option value="dreses">dress</option>
          <option value="shoes">shoes</option>
        </select>
      </div>

      <div className="filters__container">
        <SelectBox
          head="color"
          sizes={sizes}
          color={color}
          setColor={setColor}
          setSize={setSize}
        />
        <SelectBox head="size" sizes={sizes} size={size} setSize={setSize} />
        <SelectBox
          head="price"
          sizes={sizes}
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          setSize={setSize}
        />
      </div>

      <div className="filters__controls">
        <button onClick={handleResetStates}>reset</button>
        <button style={{ fontWeight: "bold" }} onClick={handleFilter}>
          filtr
        </button>
      </div>
    </section>
  );
};

export default Filters;