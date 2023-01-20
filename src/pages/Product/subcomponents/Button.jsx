import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({classes, iconClass = '', click, icon}) => {
    
    return (
        <button className={classes} onClick={click}>
            <FontAwesomeIcon className={iconClass} icon={icon} />
        </button>
    )
}

export default Button;