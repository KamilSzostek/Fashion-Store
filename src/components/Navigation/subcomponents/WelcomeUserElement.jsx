import React from 'react';
import '../Navigation.scss';

const WelcomeUserElement = () => (
    <h5 className="welcome">
        Hello, <br /> <span>{sessionStorage.getItem("userName")}</span>
    </h5>
);

export default WelcomeUserElement;