import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../store/StoreProvider";
import Card from "./subcomponents/Card";
import "./CategoryBox.scss";

const CategoryBox = ({ title = '', collection, isViewAll }) => {
    const { collectionHer, collectionHim } = useContext(StoreContext);
    const cards = collection.map((item) => {
        const path = `/shop/product/${item.name}`;
        return (
            <Card
                key={item.id}
                item={item}
                path={path}
            />
        );
    });
    const asideClass = `category-box__img ${title}`
    return (
        <section className="category-box">
            <main>
                <header>
                    {title && <h3>{title}</h3>}
                    {isViewAll && (
                        <Link
                            className="all"
                            to="/shop/collection"
                            state={title === "her" ? collectionHer : collectionHim}
                        >
                            <span>See</span>{" "}more
                        </Link>
                    )}
                </header>
                <div className="container">{cards}</div>
            </main>
            <aside className={asideClass} />
        </section>
    );
};

export default CategoryBox;