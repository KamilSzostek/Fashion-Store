import React, { useState } from "react";
import FormSignIn from "../Form/FormSignIn";
import Notification from "../Notification/Notification";
import NavigationMobile from "./subcomponents/NavigationMobile";
import NavigationDesktop from "./subcomponents/NavigationDesktop";
import {
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import "./Navigation.scss";

export let refreshNav;

const Navigation = () => {
  const [refreshNavigation, setRefreshNavigation] = useState(false);
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const countOfProductsInCart = sessionStorage.getItem("countOfProductsInCart");

  refreshNav = () => setRefreshNavigation(!refreshNavigation);

  const handleShopLink = () => {
    setIsLogModalOpen(false);
    setRefreshNavigation(!refreshNavigation);
  };

  const handleSignInForm = () => {
    setIsLogModalOpen(!isLogModalOpen);
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
    setRefreshNavigation(!refreshNavigation);
  };

  const handleLogModalClose = () => setIsLogModalOpen(false);

  const handleLogout = () => setIsLogoutModalOpen(true);

  const showBadge = () => {
    if (countOfProductsInCart !== null && countOfProductsInCart > 0) {
      return <Notification value={countOfProductsInCart} icon={faGift} />;
    }
  };
  return (
    <nav>
      <NavigationMobile
        isLogModalOpen={isLogModalOpen}
        handleSignInForm={handleSignInForm}
        handleShopLink={handleShopLink}
        handleLogout={handleLogout}
        isLogoutModalOpen={isLogoutModalOpen}
        closeLogoutModal={closeLogoutModal}
        showBadge={showBadge}
        countOfProductsInCart={countOfProductsInCart}
      />
      <NavigationDesktop
        isLogModalOpen={isLogModalOpen}
        handleSingInForm={handleSignInForm}
        handleShopLink={handleShopLink}
        handleLogout={handleLogout}
        isLogoutModalOpen={isLogoutModalOpen}
        closeLogoutModal={closeLogoutModal}
        showBadge={showBadge}
        countOfProductsInCart={countOfProductsInCart}
      />
      <FormSignIn
        isModalOpen={isLogModalOpen}
        handleModalClose={handleLogModalClose}
      />
    </nav>
  );
};

export default Navigation;