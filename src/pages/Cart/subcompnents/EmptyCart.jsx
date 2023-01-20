import React from 'react';
import { Link } from "react-router-dom";
import Empty from "../../../utility/images/empty.png";

const EmptyCart = () => {
    return (
        <>
            <section className="cart__back">
                <img src={Empty} alt="empty shopping-cart" />
                <span>You can fix this...</span>
                <Link to="/shop">
                    Go shop
                </Link>
            </section>
        </>
    )
}

export default EmptyCart;