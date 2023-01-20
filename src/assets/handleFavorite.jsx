export const handleFavorite = (e, func, fav, id) => {
    let userJSON = localStorage.getItem(sessionStorage.getItem("accountKey"));
    const user = JSON.parse(userJSON);

    e.target.parentNode.classList.toggle("favorite");
    func

    if (fav)
        user.favorites = [...user.favorites].filter(
            (item) => item !== id
        );
    else user.favorites.push(id);

    userJSON = JSON.stringify(user);
    localStorage.setItem(sessionStorage.getItem("accountKey"), userJSON);
};