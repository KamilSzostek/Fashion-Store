import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import SignInElement from './SignInElement';
import WelcomeUserElement from './WelcomeUserElement';
import SignUpElement from "./SignUpElement";
import LogoutElement from './LogoutElement';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import "../Navigation.scss";

const NavigationMobile = ({
  isLogModalOpen,
  handleSignInForm,
  handleLogout,
  handleShopLink,
  isLogoutModalOpen,
  closeLogoutModal,
  showBadge,
  countOfProductsInCart
}) => {
  const mobileRef = useRef(null);
  const burgerRef = useRef(null);

  const showNavMobile = () => {
    const mobile = mobileRef.current;
    const burger = burgerRef.current;

    burger.classList.add('opacity-0');
    burger.classList.add('z-index-1');
    burger.style.width = '300px';
    burger.style.left = '50%';

    setTimeout(() => burger.classList.add('d-none'), 1000);
    setTimeout(() => mobile.classList.remove('d-none'), 1000);
    mobile.classList.remove('opacity-0');
    mobile.classList.remove('z-index-1');

  };
  return (
    <div>
      <div className="burger" ref={burgerRef} onClick={showNavMobile}>
        <div className="bar"></div>
      </div>
      <ul className="mobile opacity-0 z-index-1 d-none" ref={mobileRef}>
        <li>
          {sessionStorage.getItem("isLogged") === null
            ? <SignInElement isLogModalOpen={isLogModalOpen} handleSignInForm={handleSignInForm} />
            : <WelcomeUserElement />}
        </li>
        <li>
          {sessionStorage.getItem("isLogged") === null
            ? <SignUpElement handleShopLink={handleShopLink} />
            : <LogoutElement isLogoutModalOpen={isLogoutModalOpen} handleLogout={handleLogout} closeLogoutModal={closeLogoutModal} />}
        </li>
        <li>
          <NavLink className="link" to="/shop" onClick={handleShopLink}>
            <FontAwesomeIcon icon={faStore} />
          </NavLink>
        </li>
        <li>
          {(countOfProductsInCart === null || countOfProductsInCart < 0)
            ? (<button className="link">
              <FontAwesomeIcon style={{color: 'gray'}} icon={faShoppingBasket} />
            </button>)
            : (< NavLink className="link" to="/cart" onClick={handleShopLink}>
              <FontAwesomeIcon icon={faShoppingBasket} />
              {showBadge()}
            </NavLink>)}
        </li>
      </ul>
    </div >
  );
};

export default NavigationMobile;