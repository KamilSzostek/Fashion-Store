import React, { useLayoutEffect, useEffect, useState } from "react";
import { useLocation } from "react-router";
import {motion} from 'framer-motion';
import Filters from "../../components/Filters/Filters";
import CategoryBox from "../../components/CategoryBox/CategoryBox";
import "./Collection.scss";

export let collectionHandler;

const Collection = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);

  collectionHandler = (collection) => setProducts(collection);

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  useEffect(() => {
    if (products.length <= 0) {
      if (location.state.searchValue === undefined) setProducts(location.state);
      else setProducts(location.state.search);
    }
  }, []);

  const handleReset = () => {
    if (location.state.searchValue === undefined) setProducts(location.state);
    else setProducts(location.state.search);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="fashion-collection">
        <aside className="fashion-collection__left">
          <div className="fashion-collection__left-img1" />
          <div className="fashion-collection__left-img2" />
        </aside>
        <main>
          <Filters
            products={
              location.state.searchValue === undefined
                ? location.state
                : location.state.search
            }
            setProducts={setProducts}
            handleReset={handleReset}
          />

          {products.length === 0 ? (
            <h4 className="fashion-collection__info">No results</h4>
          ) : (
            location.state.searchValue && (
              <h4 className="fashion-collection__info">
                Results for phrase '{location.state.searchValue}'
              </h4>
            )
          )}
          <CategoryBox title="" collection={products} />
        </main>
        <aside className="fashion-collection__right">
          <div className="fashion-collection__right-img1" />
          <div className="fashion-collection__right-img2" />
        </aside>
      </section>
    </motion.div>
  );
};

export default Collection;