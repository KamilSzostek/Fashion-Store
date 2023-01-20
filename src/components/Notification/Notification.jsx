import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Notification.scss';

const Notification = ({value, icon}) => {
    return ( 
        <div className='notification'>
            <label className='notification__value'>{value}</label>
            <FontAwesomeIcon className='notification__icon' icon={icon} />
        </div>
     );
}
 
export default Notification;