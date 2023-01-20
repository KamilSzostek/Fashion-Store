import React from 'react';

const SectionCard = ({ title }) => {
    const className = `regular__container__cards__card-${title[0]} card`;

    return (
        <div className={className} />
    )
}

export default SectionCard;