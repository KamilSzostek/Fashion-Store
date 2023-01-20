import React from "react";
import { useNavigate } from "react-router";
import { useResizeRefresh } from "../../hooks/useResizeRefresh";
import Logo from "../../utility/images/logo2.png";
import "./Start.scss";

const Start = () => {
  const navigate = useNavigate();
  const goShop = () => {
    if (window.innerWidth >= 768) navigate("/shop");
  }
  useResizeRefresh(goShop);

  return (
    <div className="start">
      <img className="logo" src={Logo} alt="logo" />
      <label>find your design</label>
    </div>
  );
};

export default Start;