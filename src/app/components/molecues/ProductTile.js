import React from 'react';
import { Wrapper, Photo, Promo, Bottom } from './ProductTile.styles';
import { product1 } from 'data/product1';
import Button from '../atoms/Button/Button';
import Rating from '../atoms/Rating/Rating';

const ProductTile = () => {
  return (
    <Wrapper>
      <Photo style={product1.image ? { backgroundImage: `url(${product1.image})` } : ''}>
        <Promo />
      </Photo>
      <Bottom>
        <h3>{product1.name}</h3>
        <span>{product1.description}</span>
        <Rating rate={2} />
        <Button label="Show details" isFullWidth/>
      </Bottom>
    </Wrapper>
  );
};

export default ProductTile;
