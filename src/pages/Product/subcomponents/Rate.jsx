import React, { useLayoutEffect, useRef } from 'react';
import Star from "./Star";
import './Rate.scss';

const Rate = ({ id }) => {
    const starsRef = useRef();
    const starBgCoverRef = useRef();

    useLayoutEffect(() => {
        const stars = starsRef.current.querySelectorAll(".star");
        for (const star of stars) star.classList.remove("shine");
        starBgCoverRef.current.classList.add("d-none");
    }, [id])

    const handleRate = (e) => {
        let parent = e.target.parentNode;
        parent = parent.parentNode;
        const id = parent.id;
        const stars = starsRef.current.querySelectorAll(".star");
        for (const star of stars)
            star.id <= id
                ? star.classList.add("shine")
                : star.classList.remove("shine");
        e.type === "click" && starBgCoverRef.current.classList.remove("d-none");
    };

    const starsElements = () => {
        const maxNumberOfStars = 5;
        const stars = [];
        for (let index = 0; index < maxNumberOfStars; index++) {
            stars.push(<Star key={index} id={index + 1} handleRate={handleRate} />);
        }
        return stars;
    };


    return (
        <div className="product__card__rate">
            <h5>Rate product</h5>
            <div className="stars" ref={starsRef}>
                <div className="bg-cover d-none" ref={starBgCoverRef} />
                {starsElements()}
            </div>
        </div>
    )
}

export default Rate;