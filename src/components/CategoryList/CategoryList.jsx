import React from "react";
import ListElement from "./subcomponents/ListElement";
import { list } from '../../assets/listOfCategories';
import "./CategoryList.scss";

const CategoryList = () => {

  const listElements = list.map(element => (
    <ListElement key={list.indexOf(element)} name={element.name} img={element.img} />
  ));
  return (
    <section className="category-list">
      <h3>Categories</h3>
      <div className="category-list__container">
        {listElements}
      </div>
    </section>
  );
};

export default CategoryList;