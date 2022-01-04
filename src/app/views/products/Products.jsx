import React,{useState} from 'react';
import ProductsList from 'app/components/organisms/ProductList/ProductsList';
import Header from 'app/components/organisms/Header/Header';
import { Wrapper } from './Products.styles'

export const ItemsContext = React.createContext({
  handleChangeActive: () => {},
  handleChangePromo: () => {},
  active: false,
  promo: false,
});

export const Products = () => {
  const [active, setActive] = useState(false);
  const [promo, setPromo] = useState(false);

  const handleChangeActive = () => {
    setActive(!active);
    console.log(`checkboxactive was clicked an is now:${active}`)
  };

  const handleChangePromo = () => {
    setPromo(!promo);
    console.log(`checkboxactive was clicked an is now:${promo}`)
  };


  return (
    <ItemsContext.Provider value={{
      handleChangeActive,
      handleChangePromo,
      active,
      promo,
    }}>
      <Wrapper>
        <Header />
        <ProductsList />
      </Wrapper>
    </ItemsContext.Provider>
  );
};
