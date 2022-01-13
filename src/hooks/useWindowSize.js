import { useEffect, useState, useRef } from 'react';
import { Theme } from 'assets/styles/Theme';

export const useWindowSize = () => {
  const [columns, setColumns] = useState(5);
  const [rows, setRows] = useState(5);
  const [limit, setLimit] = useState(10);

  const handleWindowResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (height < 650) {
      setRows(1);
    } else if (height < 1100) {
      setRows(2);
    } else if (height < 1550) {
      setRows(3);
    } else if (height < 2000) {
      setRows(4);
    }

    if (width > Theme.breakePoints.xxLarge) {
      setColumns(5);
    } else if (width > Theme.breakePoints.xLarge) {
      setColumns(4);
    } else if (width > Theme.breakePoints.large) {
      setColumns(3);
    } else if (width > Theme.breakePoints.small) {
      setColumns(2);
    } else {
      setColumns(1);
    }
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  useEffect(() => {
    setLimit(columns * rows);
  }, [columns, rows]);

  return limit;
};
