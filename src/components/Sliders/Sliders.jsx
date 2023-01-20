import React from 'react';

const Sliders = ({ maxPrice, minPrice, handlePriceOnChange }) => {

  return (
    <div className="sliders">
      <label className="slider">
        <span>min</span>
        <input
          id="min"
          min="0"
          max={maxPrice}
          type="range"
          onChange={handlePriceOnChange}
        />
        <span style={{ fontSize: "1.4rem" }}>{minPrice}</span>
        <span>pln</span>
      </label>
      <label className="slider">
        <span>max</span>
        <input
          id="max"
          min={minPrice}
          max="5000"
          type="range"
          onChange={handlePriceOnChange}
        />
        <span style={{ fontSize: "1.4rem" }}>{maxPrice}</span>
        <span>pln</span>
      </label>
    </div>
  )
}

export default Sliders;