import React, { useEffect, useState } from 'react';
import './Description.scss';

const Description = () => {
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

    useEffect(() => {
        window.innerWidth < 576 && setIsDescriptionVisible(true);
    })

    const handleShowDescription = ({ target }) => {
        if (window.innerWidth > 576) {
            const show = target.nextSibling;
            show.style.transform === ""
                ? (show.style.transform = "rotate(180deg)")
                : (show.style.transform = "");
            const parent = target.parentNode;
            const paragraph = parent.nextSibling;
            if (isDescriptionVisible === true) {
                paragraph.classList.remove("show-description");
                paragraph.classList.add("hide-description");
            } else {
                paragraph.classList.add("show-description");
                paragraph.classList.remove("hide-description");
            }
            setIsDescriptionVisible(!isDescriptionVisible);
        }
    };
    return (
        <article className="product__card__description">
            <h5>
                Product description
            </h5>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim
            </p>
        </article>
    )
}

export default Description;