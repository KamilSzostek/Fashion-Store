import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../Product.scss";

const Star = ({ id, handleRate }) => (
  <button id={id} className="star" onClick={handleRate} onMouseOver={handleRate}>
    <FontAwesomeIcon icon={faStar} />
  </button>
);

export default Star;
