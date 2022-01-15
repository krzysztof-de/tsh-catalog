import { useEffect, useState, useCallback,useMemo } from 'react';
import { Theme } from 'assets/styles/Theme';

export const useWindowSize = () => {
  const [columns, setColumns] = useState(null);
  const [rows, setRows] = useState(null);
  const [limit, setLimit] = useState(null);

  console.log(`uws_(${columns}, ${rows}), limit: ${limit}`);

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
    console.log(`change columns and rows`)
  };

  useEffect(() => {
    console.log('add event listener')
    updateLimit();
    window.addEventListener('resize', updateLimit);
    return () => window.removeEventListener('resize', updateLimit);
  }, []);

  useMemo(() => {
    console.log(`set_new_limits`)
    columns === 1 ? setLimit(4) : setLimit(columns * rows);
 }, [columns, rows]);

  return {
    limit,
    updateLimit,
  };
};
