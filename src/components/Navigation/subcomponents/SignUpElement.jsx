import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import "../Navigation.scss";

const SignUpElement = ({handleShopLink}) => (
    <NavLink className="link" to="/signup" onClick={handleShopLink}>
        <FontAwesomeIcon className="icon" icon={faUserPlus} />
        <span>sign up</span>
    </NavLink>
);

export default SignUpElement;