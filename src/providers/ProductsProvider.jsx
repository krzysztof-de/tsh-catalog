import React, { useState, useEffect } from 'react';
import { mockproducts } from 'data/products';
import useFetch from 'hooks/useFetch';

export const ProductsContext = React.createContext({
  handleChangeActive: () => {},
  handleChangePromo: () => {},
  active: false,
  promo: false,
  search: '',
});

const ProductsProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const [promo, setPromo] = useState(false);
  const [search, setSearch] = useState('');

  const handleChangeActive = () => {
    setActive(!active);
    localStorage.setItem('__active_', !active);
  };

  const handleChangePromo = () => {
    setPromo(!promo);
    localStorage.setItem('__promo_', !promo);
  };

  const handleSearch = (query) => {
    setSearch(query);
    localStorage.setItem('__active_', !active);
  };

  return (
    <ProductsContext.Provider
      value={{
        handleChangeActive,
        handleChangePromo,
        handleSearch,
        active,
        promo,
        search,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
