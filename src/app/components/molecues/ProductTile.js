import React from 'react';
import { Wrapper, Photo, Bottom } from './ProductTile.styles';
import { product1 } from 'data/product1';
import Button from '../atoms/Button/Button';
import Rating from '../atoms/Rating/Rating';

const ProductTile = ({ itemData: { id, name = 'Product title', description = 'Product description', rating, promo, active, image } }) => {
  return (
    <Wrapper>
      <Photo style={product1.image ? { backgroundImage: `url(${image})` } : ''} className={`${active ? 'active' : ''} ${promo ? 'promo' : ''}`} />
      <Bottom>
        <h3>{name}</h3>
        <span>{description}</span>
        <Rating rating={rating} />
        <Button label="Show details" isFullWidth disabled={!active} />
      </Bottom>
    </Wrapper>
  );
};

export default ProductTile;
