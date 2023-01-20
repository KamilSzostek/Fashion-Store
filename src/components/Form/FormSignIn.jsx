import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Modal from "../Modal/Modal";
import "./Form.scss";
import { faUser, faUserGroup, faLock } from "@fortawesome/free-solid-svg-icons";
import OtherSignOptions from "./subcomponents/OtherSignOptions";
import Fieldset from "./subcomponents/Fieldset";
import { refreshNav } from "../Navigation/Navigation";
import { refreshMain } from "../Main/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormSignIn = ({ handleModalClose, isModalOpen }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errorInfo, setErrorInfo] = useState("");
  const [logDataSave, setLogDataSave] = useState(false);

  const handleLoginChange = (e) => setLogin(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleLogDataSaveChange = (e) => setLogDataSave(e.target.value);
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const location = useLocation();
  const navigate = useNavigate();

  const resetStateOfInputs = () => {
    setLogin("");
    setPassword("");
    setErrorInfo("");
  };

  useEffect(() => {
    if (isModalOpen) resetStateOfInputs();
  }, [isModalOpen]);

  const handleSignIn = () => {
    for (let index = 0; index < localStorage.length; index++) {
      const accountJSON = localStorage.getItem(localStorage.key(index));
      const account = JSON.parse(accountJSON);
      if (
        (account.login === login || account.email === login) &&
        account.password === password
      ) {
        sessionStorage.setItem("isLogged", true);
        sessionStorage.setItem("userName", account.name);
        sessionStorage.setItem("accountKey", localStorage.key(index));
        handleModalClose();
        refreshNav && refreshNav();
        refreshMain && refreshMain();
        if(location.pathname === '/signup')
          navigate('/shop');
      }
    }
    setErrorInfo("Wrong login or password");
  };

  return (
    <Modal
      handleOnClose={handleModalClose}
      isOpen={isModalOpen}
      shouldBeCloseOutsideClick={true}
    >
      <form onSubmit={handleOnSubmit}>
        <h3>Enter your Credentials</h3>
        <small className="error-info">{errorInfo}</small>
        <Fieldset
          legend="Login"
          inputValue={login}
          handleChange={handleLoginChange}
          icon={faUser}
        />
        <Fieldset
          legend="Password"
          inputValue={password}
          handleChange={handlePasswordChange}
          icon={faLock}
          type="password"
        />
        <label>
          <span>Remember me</span>
          <input
            onChange={handleLogDataSaveChange}
            value={logDataSave}
            type="checkbox"
          />
        </label>
        <div className="next-btn">
          <button type="submit" onClick={handleSignIn}>
            sign in
          </button>
        </div>
      </form>
      <OtherSignOptions />
      <div className="signup-option">
        <p>If you don't have account, you can easily sign up </p>
        <Link className="link" to="/signup" onClick={handleModalClose}>
          <FontAwesomeIcon className="icon" icon={faUserGroup} />
          <span>join</span>
        </Link>
      </div>
    </Modal>
  );
};

export default FormSignIn;
