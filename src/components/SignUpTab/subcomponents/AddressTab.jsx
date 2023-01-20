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
  const [postalCode, setPostalCode] = useState("");
  const [clear, setClear] = useState(false);

  clearAddress = () => setClear(true);

  useEffect(() => {
    setStreet('')
    setCity('')
    setPostalCode('')
  }, [clear])


  const handleStreetChange = (e) => setStreet(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handlePostalCodeChange = (e) => {
    if (e.target.value.length <= 6) setPostalCode(e.target.value);
  };

  const handlePostalCodeValidation = ({ target }) => {
    const input = target;
    input.onkeydown = (e) => {
      const regexNumbers = /[^0-9.]+/;
      if (regexNumbers.test(e.key) && e.key !== "Backspace")
        input.value = input.value.substring(0, input.value.length - 1);
      if (input.value.length === 2) input.value = `${input.value}-`;
      if (input.value.length === 3 && e.key == "Backspace")
        input.value = input.value.substring(0, 2);
    };
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
