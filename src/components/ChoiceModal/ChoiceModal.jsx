import React from "react";
import { Link } from "react-router-dom";
import { refreshMain } from '../Main/Main';
import { cartRefresh } from "../../pages/Cart/Cart";
import Modal from "../Modal/Modal";
import "./ChoiceModal.scss";

const ChoiceModal = ({ path = "", question, isOpen, closeModal }) => {
  const separetedQuestion = question.split('.')
  const handleAccept = () => {
    if (path === "") {
      sessionStorage.removeItem("isLogged");
      sessionStorage.removeItem("cart");
      sessionStorage.removeItem("countOfProductsInCart");
    }
    refreshMain && refreshMain();
    cartRefresh && cartRefresh();
    closeModal();
  };

  const linkElement = (
    <Link className="link" to={path} onClick={handleAccept}>
      Yes
    </Link>
  );

  const buttonElement = (
    <button className="link" onClick={handleAccept}>
      Yes
    </button>
  );
  return (
    <Modal
      className="cart-dialog"
      isOpen={isOpen}
      handleOnClose={closeModal}
      shouldBeCloseOutsideClick={false}
    >
      <div className="cart-modal">
        {path === '' ? (<h2>{question}?</h2>) : (<h2>{separetedQuestion[0]}.<br />{separetedQuestion[1]}?</h2>)}
        {path === "" ? buttonElement : linkElement}
        <button onClick={closeModal}>No</button>
      </div>
    </Modal>
  );
};

export default ChoiceModal;
