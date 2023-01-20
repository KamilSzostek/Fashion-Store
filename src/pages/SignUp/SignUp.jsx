import React, { useState, useRef } from "react";
import {motion} from 'framer-motion';
import InfoModal from "../../components/InfoModal/InfoModal";
import OtherSignOptions from "../../components/Form/subcomponents/OtherSignOptions";
import FormSignUp from "../../components/Form/FormSignUp";
import './SignUp.scss';

const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const asideRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="signup">
        <aside className="aside__image" ref={asideRef} />
        <div className="signup-bg" />
        <div className="signup__form">
          <h2 className="sign-title">sign up</h2>
          <FormSignUp openModal={openModal} asideRef={asideRef} />
          <OtherSignOptions />
          <InfoModal
            info="New account added You can sign in now"
            isOpen={isOpen}
            closeModal={closeModal}
          />
        </div>
      </section>
    </motion.div>
  );
};

export default SignUp;