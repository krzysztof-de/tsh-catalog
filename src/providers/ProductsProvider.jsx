import React, { useState, useEffect } from 'react';
import { mockproducts } from 'data/products';

export const ProductsContext = React.createContext({
  handleChangeActive: () => {},
  handleChangePromo: () => {},
  active: false,
  promo: false,
  loading: false,
  error: false,
  products: {},
  data: {},
});

const ProductsProvider = ({ children }) => {
  const [data, setData] = useState(mockproducts);
  const [products, setProducts] = useState(mockproducts.items);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [promo, setPromo] = useState(false);

/*   useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://join-tsh-api-staging.herokuapp.com/products');
        console.log('fetching');
        const json = await res.json();
        setData(json);
        setProducts(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []); */

  const handleChangeActive = () => {
    console.log('handleChangeActive');
    setActive(!active);
    localStorage.setItem('__active_', !active);
  };

  const handleChangePromo = () => {
    console.log('handleChangePromo');
    setPromo(!promo);
    localStorage.setItem('__promo_', !promo);
  };

  useEffect(() => {
    let products = data.items;
    if (promo) {
      products = products.filter((item) => {
        return item.promo === true;
      });
    }
    if (active) {
      products = products.filter((item) => {
        return item.active === true;
      });
    }

    console.log(products);
    setProducts(products);

  }, [active, promo]);


  return (
    <ProductsContext.Provider
      value={{
        handleChangeActive,
        handleChangePromo,
        active,
        promo,
        loading,
        error,
        products,
        data,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
