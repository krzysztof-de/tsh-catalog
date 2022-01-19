import React, { useState } from 'react';

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
  };

  const handleChangePromo = () => {
    setPromo(!promo);
  };

  const handleSearch = (query) => {
    setSearch(query);
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
