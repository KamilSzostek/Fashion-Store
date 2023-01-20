import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Form.scss";

const Fieldset = ({ className, legend, inputValue, handleChange, handleFocus=null, icon, type = 'text'}) => {
  
    return (
    <fieldset className={className}>
      <legend>{legend}</legend>
      <input id={className} onChange={handleChange} onFocus={handleFocus} value={inputValue} type={type}/>
      <small></small>
      { icon && <FontAwesomeIcon className="icon" icon={icon}/>}
    </fieldset>
  );
};

export default Fieldset;
