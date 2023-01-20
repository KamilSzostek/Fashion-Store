import React, { useEffect, useState } from 'react';
import Fieldset from '../../Form/subcomponents/Fieldset';
import {
    faIdCard,
} from "@fortawesome/free-solid-svg-icons";

export let clearPersonal;

const PersonalTab = ({ active = '' }) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [clear, setClear] = useState(false);

    clearPersonal = () => setClear(true);

    useEffect(() => {
        setName('')
        setSurname('')
        setBirthDate('')
    },[clear])

    const handleNameChange = (e) => setName(e.target.value);
    const handleSurnameChange = (e) => setSurname(e.target.value);
    const handleDateChange = (e) => setBirthDate(e.target.value);

    const classess = `personal tab ${active}`
    return (
        <div className={classess}>
            <Fieldset
                className="name"
                legend="Name"
                inputValue={name}
                handleChange={handleNameChange}
                icon={faIdCard}
            />
            <Fieldset
                className={surname}
                legend="Surname"
                inputValue={surname}
                handleChange={handleSurnameChange}
                icon={faIdCard}
            />
            <Fieldset
                className="date"
                legend="Date of birth"
                inputValue={birthDate}
                handleChange={handleDateChange}
                type="date"
            />
        </div>
    )
}

export default PersonalTab;