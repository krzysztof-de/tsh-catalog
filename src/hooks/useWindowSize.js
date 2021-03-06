import { useEffect, useState, useMemo } from 'react';
import { theme } from 'assets/styles/theme';

export const useWindowSize = () => {
  const [columns, setColumns] = useState(null);
  const [rows, setRows] = useState(null);
  const [limit, setLimit] = useState(null);

  const updateLimit = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (height < 1100) {
      setRows(2);
    } else if (height < 1550) {
      setRows(3);
    } else if (height < 2000) {
      setRows(4);
    }

    if (width > theme.breakePoints.xxLarge) {
      setColumns(5);
    } else if (width > theme.breakePoints.xLarge) {
      setColumns(4);
    } else if (width > theme.breakePoints.large) {
      setColumns(3);
    } else if (width > theme.breakePoints.small) {
      setColumns(2);
    } else {
      setColumns(1);
    }
  };

  useEffect(() => {
    updateLimit();
    window.addEventListener('resize', updateLimit);
    return () => window.removeEventListener('resize', updateLimit);
  }, []);

  useMemo(() => {
    columns === 1 ? setLimit(4) : setLimit(columns * rows);
  }, [columns, rows]);

  return limit
};
