import { useContext } from "react";
import { useLocation } from "react-router";
import { StoreContext } from "../store/StoreProvider";

export const useGetProduct = () => {
    let product;
    const { collectionHer, collectionHim } = useContext(StoreContext);
    const location = useLocation();
    
    const pathArr = location.pathname.split("/");
    const id = pathArr[pathArr.length - 1];
    product = collectionHer.find((item) => item.name === id);
    product === undefined &&
    (product = collectionHim.find((item) => item.name === id));
    return product;
}