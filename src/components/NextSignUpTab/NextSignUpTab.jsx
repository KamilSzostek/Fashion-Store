import React, { useRef, useState } from "react";
import { validateForm } from "../../assets/validateForm";
import { clearPersonal } from "../SignUpTab/subcomponents/PersonalTab";
import { clearAddress } from "../SignUpTab/subcomponents/AddressTab";
import { clearSign } from "../SignUpTab/subcomponents/SignTab";

const NextSignUpTab = ({ openModal, id, tabIdHandler, isPersonalFilled, isAddressFilled, personalFilled, addressFilled }) => {
    const nextButtonRef = useRef(null);

    const handleSignUp = () => {
        const form = nextButtonRef.current.parentElement;
        if (validateForm(id) && isPersonalFilled && isAddressFilled) {
            const inputs = form.querySelectorAll('input');
            const newAccount = {
                name: inputs[0].value,
                surname: inputs[1].value,
                birthDate: inputs[2].value,
                street: inputs[3].value,
                city: inputs[4].value,
                postalCode: inputs[5].value,
                email: inputs[6].value,
                login: inputs[7].value,
                password: inputs[8].value,
                favorites: [],
            };
            const newAccountJSON = JSON.stringify(newAccount);
            localStorage.setItem(`account${localStorage.length + 1}`, newAccountJSON);
            openModal();
            clearPersonal();
            clearAddress();
            clearSign();
        }
    };


    const handleNext = () => {
        if (validateForm(id)) {
            switch (id) {
                case 'personal':
                    personalFilled();
                    document.body.querySelector('#personal').classList.remove('tabs-active');
                    document.body.querySelector('#address').classList.add('tabs-active');
                    tabIdHandler('address');
                    break;
                case 'address':
                    addressFilled();
                    document.body.querySelector('#address').classList.remove('tabs-active');
                    document.body.querySelector('#sign').classList.add('tabs-active');
                    tabIdHandler('sign');
                    break;
                case 'sign':
                    document.body.querySelector('#sign').classList.remove('tabs-active');
                    document.body.querySelector('#personal').classList.add('tabs-active');
                    tabIdHandler('personal');
                    handleSignUp()
                    break;
            }
        }
    };

    return (
        <div className="next-btn" ref={nextButtonRef}>
            <button onClick={handleNext}>next</button>
        </div>
    )
}

export default NextSignUpTab;