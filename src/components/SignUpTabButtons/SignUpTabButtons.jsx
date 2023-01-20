import React, { useRef } from 'react';
import TabButton from './subcomponents/TabButton';
import { validateForm } from '../../assets/validateForm';
import '../../pages/SignUp/SignUp';

const SignUpTabButtons = ({ tabIdHandler, personalFilled, addressFilled }) => {

  const tabButtonsRef = useRef(null);

  const toggleActive = ({ target }) => {
    const tabButtons = tabButtonsRef.current.querySelectorAll('button');
    for (const button of tabButtons) {
      if (button.classList.contains('tabs-active') && validateForm(button.id)) {
        button.classList.remove('tabs-active');
        target.classList.add("tabs-active");
        tabIdHandler(target.id)
        if (button.id === 'personal')
          personalFilled();
        else if (button.id === 'address')
          addressFilled();
      }
    }
  }

  return (
    <div className="tabs" ref={tabButtonsRef}>
      <TabButton
        active="tabs-active"
        id="personal"
        toggleActive={toggleActive}
      />
      <TabButton
        id="address"
        toggleActive={toggleActive}
      />
      <TabButton
        id="sign"
        toggleActive={toggleActive}
      />
    </div>
  )
}

export default SignUpTabButtons;