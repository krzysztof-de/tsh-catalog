import { useEffect, useState } from 'react';
import { Theme } from 'assets/styles/Theme';

export const useWindowSize = () => {
  const [limit, setLimit] = useState(5);

  const handleWindowResize = () => {
    if (window.innerWidth > Theme.breakePoints.xxLarge) {
      setLimit(10);
      return;
    } else if (window.innerWidth > Theme.breakePoints.xLarge) {
      setLimit(8);
      return;
    } else if (window.innerWidth > Theme.breakePoints.large) {
      setLimit(6);
      return;
    } else if (window.innerWidth > Theme.breakePoints.small) {
      setLimit(6);
      return;
    } else {
      setLimit(4);
      return;
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return limit;
};
