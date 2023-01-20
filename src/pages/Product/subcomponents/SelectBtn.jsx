import React from 'react';
import '../Product.scss';

const SelectBtn = ({ item, handleSelect}) => (  
    <span className="select" onClick={handleSelect}>
    {item}
  </span>
);
 
export default SelectBtn;