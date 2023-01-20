import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import FormSignIn from "../Form/FormSignIn";
import "./InfoModal.scss";

const InfoModal = ({ path = "", info, isOpen, closeModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalClose = () => setIsModalOpen(false);

  const showSignIn = () => {
    closeModal();
    setIsModalOpen(true);
  };
  return (
    <>
      <Modal
        className="info-dialog"
        isOpen={isOpen}
        handleOnClose={closeModal}
        shouldBeCloseOutsideClick={false}
      >
        <div className="info-modal">
          <h2>{info}</h2>
          {path === "" ? (
            <button className="link" onClick={showSignIn}>
              Ok
            </button>
          ) : (
            <Link className="link" to={path} onClick={closeModal}>
              Ok
            </Link>
          )}
        </div>
      </Modal>
      <FormSignIn
        handleModalClose={handleModalClose}
        isModalOpen={isModalOpen}
      />
    </>
  );
};

export default InfoModal;
