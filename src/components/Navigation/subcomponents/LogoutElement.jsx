import React from 'react';
import ChoiceModal from "../../ChoiceModal/ChoiceModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import '../Navigation.scss';

const LogoutElement = ({isLogoutModalOpen, handleLogout, closeLogoutModal}) => {
    return (
        <>
            <button
                className={isLogoutModalOpen ? "link active" : "link"}
                onClick={handleLogout}
            >
                <FontAwesomeIcon className="icon" icon={faRightFromBracket} />
            </button>
            <ChoiceModal
                question="Are you sure you want to logout"
                isOpen={isLogoutModalOpen}
                closeModal={closeLogoutModal}
            />
        </>
    )
}

export default LogoutElement;