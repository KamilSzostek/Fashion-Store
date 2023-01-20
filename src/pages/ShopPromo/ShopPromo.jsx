import React, { useContext, useLayoutEffect } from "react";
import { useLocation } from "react-router";
import { StoreContext } from "../../store/StoreProvider";
import { motion } from 'framer-motion';
import Sale from "../../components/Sale/Sale";
import CategoryBox from "../../components/CategoryBox/CategoryBox";
import Women from "../../utility/images/sale.jpg";
import Bestseller from "../../utility/images/bestseller.png";
import "./ShopPromo.scss";
import CategoryList from "../../components/CategoryList/CategoryList";

const ShopPromo = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    })
    const location = useLocation();

    const text1 = ["", "sale on the entire", "new collection", "-10"];
    const text2 = ["", "in this week", "all bestsellers", "-5"];

    const { collectionHer, collectionHim } = useContext(StoreContext);
    const setCollection = (collection) => {
        const type = location.pathname.split("/")[2];
        switch (type) {
            case "new":
                return [...collection].filter((item) => item.isNew === true);
            case "bestsellers":
                return [...collection].filter((item) => item.isBest === true);
            default:
                return null;
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <section className="promo">
                {location.state === "new" && <Sale img={Women} text={text1} />}
                {location.state === "bestsellers" && (
                    <Sale img={Bestseller} text={text2} specialStyle="bestseller" />
                )}
                <CategoryList />
                <CategoryBox
                    title="her"
                    collection={setCollection(collectionHer)}
                    isViewAll={true}
                />
                <CategoryBox
                    title="him"
                    collection={setCollection(collectionHim)}
                    isViewAll={true}
                />
            </section>
        </motion.div>
    );
};

export default ShopPromo;