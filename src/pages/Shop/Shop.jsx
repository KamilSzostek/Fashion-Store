import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Opening from "./subcomponent/Opening";
import RegularSection from "../../components/RegularSection/RegularSection";
import New from '../../utility/images/regular/new.jpeg'
import Best from '../../utility/images/regular/best.jpeg'
import "./Shop.scss";
import WhishElements from "../../components/WhishElements/WhishElements";

const Shop = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
                <Opening />
                <Link id="new" className="link" to="/shop/new" state="new">
                    <RegularSection title="new collection" image={New} promo='10' />
                </Link>
                <Link className="link" to="/shop/bestsellers" state="bestsellers">
                    <RegularSection title="best sellers" image={Best} promo='5' />
                </Link>
                <WhishElements />
                <div className="shop-main-bg" />
        </motion.div>
    );
};

export default Shop;
