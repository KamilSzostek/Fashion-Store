import React from 'react';
import PersonalTab from './subcomponents/PersonalTab';
import AddressTab from './subcomponents/AddressTab';
import SignTab from './subcomponents/SignTab';

const SignUpTab = ({ id }) => {
    return (
        <>
            {id === 'personal' ? (<PersonalTab active='tab-active'/>) : (<PersonalTab/>)}
            {id === 'address' ? (<AddressTab active='tab-active'/>) : (<AddressTab/>)}
            {id === 'sign' ? (<SignTab active='tab-active'/>) : (<SignTab/>)}
        </>
    )
}

export default SignUpTab;