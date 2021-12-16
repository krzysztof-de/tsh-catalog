import React from 'react';
import { Wrapper, Photo, Promo, Active, Bottom } from './ProductTile.styles';
import { product1 } from 'data/product1';
import Button from '../atoms/Button/Button';
import Rating from '../atoms/Rating/Rating';

const ProductTile = ({id, name = product1.name, description = product1.description, rating, promo, active, image, ...props}) => {
  return (
    <Wrapper>
      <Photo style={product1.image ? { backgroundImage: `url(${product1.image})` } : ''} className={`${active ? 'active' : ''} ${promo ? 'promo' : ''}`} />
      <Bottom>
        <h3>{name}</h3>
        <span>{description}</span>
        <Rating rating={rating} />
        <Button label="Show details" isFullWidth disabled={!active}/>
      </Bottom>
    </Wrapper>
  );
};

export default ProductTile;
