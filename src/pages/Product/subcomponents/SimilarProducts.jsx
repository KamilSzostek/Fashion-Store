import React from 'react';
import { Link } from 'react-router-dom';
import './SimilarProducts.scss';

const SimilarProducts = ({ similar }) => {
    const similarElements = similar.map((item) => {
        const path = `/shop/product/${item.name}`;
        return (
            <Link
                className="link"
                to={path}
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
                key={similar.indexOf(item)}
            >
                <img src={item.img} alt={item.name} />
            </Link>
        );
    });
    return (
        <div className="product__check">
            <h5 className='product__check__left'>check</h5>
            <h5 className='product__check__right'>out</h5>
            <div className='product__check__elements'>
                {similarElements}
            </div>
        </div>
    )
}

export default SimilarProducts;


