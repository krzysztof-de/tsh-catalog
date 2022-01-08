import React, { useState, useEffect } from 'react';
import { mockproducts } from 'data/products';
import useFetch from 'hooks/useFetch';

export const ProductsContext = React.createContext({
  handleChangeActive: () => {},
  handleChangePromo: () => {},
  active: false,
  promo: false,
  loading: false,
  error: false,
  data: {},
});

const ProductsProvider = ({ children }) => {
/*   const [data, setData] = useState(mockproducts);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); */
  const { loading, error, data } = useFetch();
  const [active, setActive] = useState(false);
  const [promo, setPromo] = useState(false);
  const [params, setParams] = useState('')
  
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
        loading,
        error,
        data,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
