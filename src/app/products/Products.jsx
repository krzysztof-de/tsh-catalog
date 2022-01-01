import React from 'react';
import ProductsList from 'app/components/organisms/ProductList/ProductsList';
import Header from 'app/components/organisms/Header/Header';
import { Wrapper } from './Products.styles'

export const Products = () => {
  return (
    <Wrapper>
      <Header />
      <ProductsList active={true} promo={true}/>
    </Wrapper>
  );
};
