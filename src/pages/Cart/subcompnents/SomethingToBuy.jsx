import React, { useEffect, useState } from 'react';
import ListElement from "./ListElement";
import { refreshNav } from '../../../components/Navigation/Navigation';

const SomethingToBuy = ({ products, setProducts }) => {
    const [summaryPrice, setSummaryPrice] = useState(0);

    useEffect(() => {
        let summary = 0;
        if (products !== null) {
            for (const product of products) {
                summary += product.price * product.count;
            }
            if (summary >= 0) setSummaryPrice(summary);
        }
    }, [products]);

    const listElements =
        products !== null &&
        [...products].map((item) => (
            <ListElement
                key={products.indexOf(item)}
                id={item.id}
                image={item.img}
                name={item.name}
                price={item.price}
                count={item.count}
                size={item.size}
                color={item.color}
                products={products}
                setProducts={setProducts}
                refreshNav={refreshNav}
            />
        ));

    const clearCart = () => {
        const newCart = [];
        sessionStorage.setItem("cart", JSON.stringify(newCart));
        sessionStorage.setItem("countOfProductsInCart", newCart.length);
        setProducts(newCart);
        refreshNav && refreshNav();
    };

    return (
        <div className='cart__shopping'>
            <ul className="cart__shopping__list">
                {listElements}
            </ul>
            <div className="cart__shopping__summary">
                <button className="cart__shopping__summary-clear" onClick={clearCart} >
                    remove all
                </button>
                <label className="cart__shopping__summary-price">
                    Summary:{" "}
                    <span>
                        <b>{summaryPrice}</b> pln
                    </span>
                </label>
            </div>
            <section className="cart__shopping__controls pay">
                <div className="pay__discount">
                    <span>Discount code:</span>
                    <input type="text" />
                </div>
                <button className="button">Pay</button>
            </section>
        </div>

    )
}

export default SomethingToBuy;