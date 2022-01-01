import React from 'react';
import PropTypes from 'prop-types';
import { ProductShape } from 'types';
import { Wrapper, Photo, Bottom, StyledControls, StyledDesc } from './ProductTile.styles';
import { product1 } from 'data/product1';
import Button from '../atoms/Button/Button';
import Rating from '../atoms/Rating/Rating';

const ProductTile = ({ itemData: { id, name = 'Product title', description = 'Product description', rating, promo, active, image } }) => {
  return (
    <Wrapper>
      <Photo style={product1.image ? { backgroundImage: `url(${image})` } : ''} className={`${active ? 'active' : ''} ${promo ? 'promo' : ''}`} />
      <Bottom>
        <StyledDesc>
        <h3>{name}</h3>
        <p>{description}</p>
        </StyledDesc>
        <StyledControls>
          <Rating rating={rating} />
          <Button label="Show details" isFullWidth disabled={!active} />
        </StyledControls>
      </Bottom>
    </Wrapper>
  );
};

ProductTile.propTypes = {
  itemData: PropTypes.shape(ProductShape),
};

export default ProductTile;
