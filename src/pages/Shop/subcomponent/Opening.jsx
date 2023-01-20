import React from 'react';
import Logo from "../../../utility/images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Opening = () => {
    const goToNew = () => window.scrollTo(0, window.innerHeight);
    return (
        <>
            <div className="opening-page">
                <div className="bg-dark-cover" />
                <img className="opening-page__logo" src={Logo} alt="logo" />
                <div className="opening-page-icon" onClick={goToNew}>
                    <FontAwesomeIcon className="icon" icon={faChevronDown} />
                </div>
                <div className="opening-page__text">
                    <span className="opening-page__text-firstline">meet us</span>
                    <p className="opening-page__text-paragraph">
                        Find <span className="second-effect">own</span> <span className="first-effect">Modern</span> <br />
                        <span className="first-effect">and</span> <span className="first-effect">Comfort</span> Style
                    </p>
                </div>
            </div>
        </>)
}
export default Opening;