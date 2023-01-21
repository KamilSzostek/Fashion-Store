import React, { useEffect, useState } from 'react';
import Fieldset from '../../Form/subcomponents/Fieldset';
import {
  faLocationDot,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";

export let clearAddress;

const AddressTab = ({ active = '' }) => {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postalInput1, setPostalInput1] = useState("");
  const [postalInput2, setPostalInput2] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [clear, setClear] = useState(false);

  clearAddress = () => setClear(true);

  useEffect(() => {
    setStreet('')
    setCity('')
    setPostalCode('')
  }, [clear])


  const handlePostalInput1 = (e) => {
    if (e.target.value.length <= 2)
      setPostalInput1(e.target.value)
  }
  const handlePostalInput2 = (e) => {
    if (e.target.value.length <= 3)
      setPostalInput2(e.target.value)
  }
  const handleStreetChange = (e) => setStreet(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handlePostalCodeChange = (e) => {
    if (e.target.value.length <= 6) setPostalCode(e.target.value);
  };

  const handlePostalCodeValidation = ({ target }) => {
    if (window.innerWidth >= 992) {
      const input = target;
      input.onkeydown = (e) => {
        const regexNumbers = /[^0-9.]+/;
        if (regexNumbers.test(e.key) && e.key !== "Backspace")
          input.value = input.value.substring(0, input.value.length - 1);
        if (input.value.length === 2) input.value = `${input.value}-`;
        if (input.value.length === 3 && e.key == "Backspace")
          input.value = input.value.substring(0, 2);
      };
    }
  };
  const classess = `address tab ${active}`
  return (
    <div className={classess}>
      <Fieldset
        className="street"
        legend="Street"
        inputValue={street}
        handleChange={handleStreetChange}
        icon={faLocationDot}
      />
      <Fieldset
        className="city"
        legend="City"
        inputValue={city}
        handleChange={handleCityChange}
        icon={faLocationDot}
      />
      <fieldset className='postal-mobile'>
        <legend>Postal code</legend>
        <div className='postal-mobile__container'>
          <input id='postal-mobile1' onChange={handlePostalInput1} value={postalInput1} type='number' minLength={2} maxLength={2} />
          -
          <input id='postal-mobile2' onChange={handlePostalInput2} value={postalInput2} type='number' minLength={3} maxLength={3} />
        </div>
        <small></small>
      </fieldset>
      <Fieldset
        className="postal"
        legend="Postal code"
        inputValue={postalCode}
        handleChange={handlePostalCodeChange}
        handleFocus={handlePostalCodeValidation}
        icon={faMailBulk}
      />
    </div>
  )
}

export default AddressTab;
