import React, { useContext, useState } from 'react';
import FormSignIn from '../Form/FormSignIn';
import { StoreContext } from '../../store/StoreProvider';
import Nothing from "../../utility/images/nothing.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShopLock } from "@fortawesome/free-solid-svg-icons";
import RegularSection from '../RegularSection/RegularSection';
import './WhishElements.scss'

const WhishElements = () => {
    const [isLogModalOpen, setIsLogModalOpen] = useState(false);
    const openLogMoadal = () => setIsLogModalOpen(true);
    const handleLogModalClose = () => setIsLogModalOpen(false);

    const userJSON = localStorage.getItem(sessionStorage.getItem("accountKey"));
    const user = JSON.parse(userJSON);

    const { collectionHer, collectionHim } = useContext(StoreContext);
    const completeCollection = [...collectionHer, ...collectionHim];

    const favoriteCollection =
        user?.favorites === undefined
            ? null
            : [...completeCollection].filter((item) => {
                for (const favorite of user.favorites)
                    if (favorite === item.id) return item;
            });


    if (sessionStorage.getItem("isLogged") === null) {
        return (
            <div className="whishlist">

                <p><b>WhishList</b> <br />Is locked</p>
                <FontAwesomeIcon className="lock" icon={faShopLock} />
                <p>
                    to unlock{" "}
                    <button onClick={openLogMoadal}>
                        sign in
                    </button>
                </p>
                <FormSignIn
                    isModalOpen={isLogModalOpen}
                    handleModalClose={handleLogModalClose}
                />
            </div>
        );
    } else {
        return (
            <div className="whishlist">
                {favoriteCollection.length === 0 ? (
                    <>
                        <img src={Nothing} alt="confused man" />
                        <h4>Your list is empty</h4>
                    </>
                ) : (
                    <RegularSection collection={favoriteCollection} title='whish List' />
                )}
            </div>
        );
    }
}

export default WhishElements;