import React, { useContext } from "react";
import { StoreContext } from '../../../store/StoreProvider';
import { Link } from "react-router-dom";

const ListElement = ({ name, img }) => {
  const { collectionHer, collectionHim } = useContext(StoreContext);
  const collection = [...collectionHer, ...collectionHim].filter((item) => item.category === name);

  return (
    <Link to="/shop/collection" state={collection}>
      <div className="category-list__container__element">
        <img src={img} alt={name} />
        <span>{name}</span>
      </div>
    </Link>
  );
};

export default ListElement;
