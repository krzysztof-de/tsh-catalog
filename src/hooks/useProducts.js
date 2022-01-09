import { useCallback, useState } from 'react';

export const useProducts = () => {
    const { REACT_APP_API_ENDPOINT } = process.env;
    const [error, setError] = useState(false);

  const getProducts = useCallback(async (params = '') => {
    try {
      console.log('useproducts_getproducts');
      const res = await fetch(REACT_APP_API_ENDPOINT + params);
      const json = await res.json();
      return json;
    } catch (e) {
      setError(true);
    }
  }, []);

  const findProducts = async (searchPhrase) => {
    try {
      console.log('useproducts_findProducts');
      const res = await fetch(REACT_APP_API_ENDPOINT + `?search=${searchPhrase}`);
      const json = await res.json();
      return json;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getProducts,
    findProducts,
    error,
  };
};
