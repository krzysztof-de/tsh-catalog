import { useCallback, useState } from 'react';

export const useProducts = () => {
  const { REACT_APP_API_URL } = process.env;
  const [error, setError] = useState(false);

  const getProducts = useCallback(async (params = '') => {
    try {
      const res = await fetch(REACT_APP_API_URL + '/products/' + params);
      const json = await res.json();
      return json;
    } catch (e) {
      setError(true);
    }
  }, [REACT_APP_API_URL]);

  const getProductById = useCallback(async (id) => {
    try {
      const res = await fetch(REACT_APP_API_URL + '/products/' + id);
      const json = await res.json();
      return json;
    } catch (e) {
      setError(true);
    }
  }, [REACT_APP_API_URL]);

  const findProducts = async (searchPhrase) => {
    try {
      const res = await fetch(REACT_APP_API_URL + '/products/' + `?search=${searchPhrase}`);
      const json = await res.json();
      return json;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getProducts,
    findProducts,
    getProductById,
    error,
  };
};
