import React from 'react';
import PropTypes from 'prop-types';
import ProductTile from 'app/components/molecues/ProductTile';
import { Wrapper } from './ProductsList.styles';
import { products } from 'data/products';

const ProductsList = () => {
  return (
    <Wrapper>
      {products.items.map((itemData) => (
        <ProductTile key={itemData.id} itemData={itemData} />
      ))}
    </Wrapper>
  );
};

/* ProductsList.propTypes = {

} */

export default ProductsList;
