import React, { useLayoutEffect, useRef, useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { StoreContext } from "../../store/StoreProvider";
import { collectionHandler } from "../../pages/Collection/Collection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./Search.scss";

const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchValue, setSearchValue] = useState("");

  const { collectionHer, collectionHim } = useContext(StoreContext);

  const searchRef = useRef(null);

  useLayoutEffect(() => {
    if (location.pathname === '/shop' || location.pathname === '/signup')
      searchRef.current.classList?.add('d-none');
    else
      searchRef.current.classList?.remove('d-none');
  }, [location.pathname])

  const handleOnChange = ({ target }) => {
    setSearchValue(target.value);
  };

  let search;
  const setCollection = () => {
    search = [...collectionHer, ...collectionHim].filter((item) =>
      item.name.includes(searchValue)
    );
    return {
      searchValue,
      search,
    };
  };

  const insideSearch = () => {
    navigate("/shop/collection", {
      state: setCollection(),
    })
    collectionHandler(search);
    setSearchValue('');
  };

  const handleEnter = ({ key }) => {
    if (key === "Enter") {
      insideSearch();
    }
  };


  return (
    <div className="search" ref={searchRef}>
      <input
        type="search"
        placeholder="search clothes..."
        value={searchValue}
        onChange={handleOnChange}
        onKeyDown={handleEnter}
      />
      <button onClick={insideSearch}>
        <FontAwesomeIcon className="button" icon={faMagnifyingGlass} />
      </button>
    </div>
  );
};

export default SearchBar;