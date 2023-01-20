import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../Navigation.scss";

const SignInElement = ({ isLogModalOpen, handleSignInForm }) => (
    <button
        className={isLogModalOpen ? "link active" : "link"}
        onClick={handleSignInForm}
    >
        <FontAwesomeIcon className="icon" icon={faUser} />
        <span>sign in</span>
    </button>
)


export default SignInElement;