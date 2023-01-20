import React from "react";
import { NavLink, Link } from "react-router-dom";
import SignInElement from "./SignInElement";
import WelcomeUserElement from "./WelcomeUserElement";
import LogoutElement from "./LogoutElement";
import SignUpElement from "./SignUpElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import "../Navigation.scss";

const NavigationDesktop = ({
  isLogModalOpen,
  handleSingInForm,
  handleShopLink,
  isLogoutModalOpen,
  handleLogout,
  closeLogoutModal,
  showBadge,
  countOfProductsInCart,
}) => {

  const cartButton = () => {
    if (countOfProductsInCart === null || countOfProductsInCart < 0) {
      return (
        <button className="link disabled">
          <FontAwesomeIcon className="icon" icon={faShoppingBasket} />
          <span>cart</span>
          {showBadge()}
        </button>
      );
    } else {
      return (
        <NavLink className="link" to="/cart" onClick={handleShopLink}>
          <FontAwesomeIcon className="icon" icon={faShoppingBasket} />
          <span>cart</span>
          {showBadge()}
        </NavLink>
      );
    }
  };
  return (
    <div className="desktop">
      {sessionStorage.getItem("isLogged") === null
        ? <SignInElement isLogModalOpen={isLogModalOpen} handleSignInForm={handleSingInForm} />
        : <WelcomeUserElement />}

      {sessionStorage.getItem("isLogged") === null
        ? <SignUpElement handleShopLink={handleShopLink} />
        : <LogoutElement isLogoutModalOpen={isLogoutModalOpen} handleLogout={handleLogout} closeLogoutModal={closeLogoutModal} />}
      <div className="shop-link">
        <NavLink className="link shop-link" to="/shop" onClick={handleShopLink}>
          <FontAwesomeIcon className="icon" icon={faStore} />
          <span>shop</span>
        </NavLink>
        <div className="shop-link__dropdown">
          <Link id="new" to='/shop/new' state='new'>new</Link>
          <Link to='/shop/bestsellers' state='bestsellers'>best</Link>
        </div>
      </div>

      {cartButton()}
    </div>
  );
};

export default NavigationDesktop;