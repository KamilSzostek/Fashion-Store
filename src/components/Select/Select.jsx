import React from 'react';

const Select = ({id, values, options, handleSelectOnChange}) => {
    return (
        <>
            <select
                id={id}
                className="select"
                size={3}
                onChange={handleSelectOnChange}
            >
                {options}
            </select>
            <p style={{ textTransform: "uppercase" }}>{values}</p>
        </>
    )
}

export default Select;