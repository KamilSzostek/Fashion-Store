import React, { createContext } from "react";
import { collectionHer, collectionHim } from '../assets/fashionCollections'

export const StoreContext = createContext(null);


const store = {
  collectionHer,
  collectionHim,
};

const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
