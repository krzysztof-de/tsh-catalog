import React, { useState, useEffect } from 'react';
import { mockproducts } from 'data/products';
import useFetch from 'hooks/useFetch';

export const ProductsContext = React.createContext({
  handleChangeActive: () => { },
  handleChangePromo: () => { },
  active: false,
  promo: false,
});

const ProductsProvider = ({ children }) => {
  /*   const [data, setData] = useState(mockproducts);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); */
  const [active, setActive] = useState(false);
  const [promo, setPromo] = useState(false);

  const handleChangeActive = () => {
    setActive(!active);
    localStorage.setItem('__active_', !active);
  };

  const handleChangePromo = () => {
    setPromo(!promo);
    localStorage.setItem('__promo_', !promo);
  };

  const handlePageClick = (x) => {
    alert(x)
  };

  return (
    <ProductsContext.Provider
      value={{
        handleChangeActive,
        handleChangePromo,
        handlePageClick,
        active,
        promo,

      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
