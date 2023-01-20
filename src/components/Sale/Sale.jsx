import React from "react";
import "./Sale.scss";

const Sale = ({ img, text, specialStyle = "" }) => {
  const classes = `sale ${specialStyle}`;
  return (
    <div className={classes}>
      <img src={img} alt="sale background" />
      <div className="sale__screen" />
      <p className="first-line">{text[0]}</p>
      <div className="half">
        <p className="second-line">{text[1]}</p>
        <span className="third-line">
          <b>{text[2]}</b>
        </span>
        <br />
        <span className="fourth-line">
          <b>{text[3]}</b>%
        </span>
      </div>
      <div className="bg-cover" />

    </div>
  );
};

export default Sale;
