import React from "react";
import Navigation from "../Navigation/Navigation";
import SearchBar from '../SearchBar/SearchBar';
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <Navigation />
      <SearchBar/>
    </header>
  )
};

export default Header;