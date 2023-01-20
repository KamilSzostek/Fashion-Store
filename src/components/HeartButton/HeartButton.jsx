import React, { useLayoutEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import './HeartButton.scss';

const HeartButton = ({ id = '' }) => {
    let userJSON = localStorage.getItem(sessionStorage.getItem("accountKey"));
    const user = JSON.parse(userJSON);

    const [isFavorite, setIsFavorite] = useState(false);

    useLayoutEffect(() => {
        user?.favorites.includes(id)
            ? setIsFavorite(true) : setIsFavorite(false);
    },[id]);

    const favHandler = ({ target }) => {
        target.tagName === 'path'
            ? target.parentNode.classList.toggle("fav")
            : target.classList.toggle("fav");
        if (isFavorite) {
            user.favorites = [...user.favorites].filter(
                (fav) => fav !== id
            );
        }
        else user.favorites.push(id);
        userJSON = JSON.stringify(user);
        localStorage.setItem(sessionStorage.getItem("accountKey"), userJSON);
        setIsFavorite(!isFavorite);
    }

    return (
        <>
            {id === '' ? <FontAwesomeIcon icon={faHeart} />
            : <FontAwesomeIcon className={isFavorite ? 'favorites fav' : 'favorites'} icon={faHeart} onClick={favHandler} />}
        </>
    )
}

export default HeartButton;