import React, { useEffect, useState } from 'react';

const useFetch = () => {
  const { REACT_APP_API_ENDPOINT } = process.env;
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const params = '?page=1&limit=20'

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(REACT_APP_API_ENDPOINT+params);
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, error, data };
};

export default useFetch;
