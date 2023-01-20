import React, { useState } from "react";
import SignUpTabButtons from '../../components/SignUpTabButtons/SignUpTabButtons';
import "../../pages/SignUp/SignUp.scss";
import NextSignUpTab from "../NextSignUpTab/NextSignUpTab";
import SignUpTab from "../SignUpTab/SignUpTab";

const FormSignUp = ({ openModal, asideRef }) => {
  const [tabId, setTabId] = useState("personal");
  const [isPersonalFilled, setIsPersonalFilled] = useState();
  const [isAddressFilled, setIsAddressFilled] = useState();

  const tabIdHandler = (id) => {
    const aside = asideRef?.current;
    aside.setAttribute('class', 'aside__image');
    if (aside) {
      switch (id) {
        case 'personal':
          aside.classList.add('girl1')
          break;
        case 'address':
          aside.classList.add('girl2')
          break;
        case 'sign':
          aside.classList.add('girl3')
          break;
      }
    }
    setTabId(id)
  }

  const personalFilled = () => setIsPersonalFilled(true);
  const addressFilled = () => setIsAddressFilled(true);

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form-signup" onSubmit={handleOnSubmit} autoComplete="off">
      <SignUpTabButtons tabIdHandler={tabIdHandler} personalFilled={personalFilled} addressFilled={addressFilled} />
      <SignUpTab id={tabId} />
      <NextSignUpTab id={tabId} openModal={openModal} tabIdHandler={tabIdHandler} personalFilled={personalFilled} addressFilled={addressFilled} isAddressFilled={isAddressFilled} isPersonalFilled={isPersonalFilled} />
    </form>
  )
}

export default FormSignUp;
