import React from "react";

const TabButton = ({ id, toggleActive, active = '' }) =>
(
    <button id={id} className={active} onClick={toggleActive} >
        {id}
    </button>

);


export default TabButton;