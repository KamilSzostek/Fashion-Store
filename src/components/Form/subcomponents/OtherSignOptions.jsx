import React from "react";
import "../Form.scss";
import Google from '../../../utility/images/google.png'
import Facebook from '../../../utility/images/facebook.png'
import Twitter from '../../../utility/images/twitter.png'

const OtherSignOptions = () => {
  return (
    <fieldset className="other-sign">
      <legend>or Sign with</legend>
      <img src={Google} alt="google" />
      <img src={Facebook} alt="facebook" />
      <img src={Twitter} alt="twitter" />
    </fieldset>
  );
};

export default OtherSignOptions;
