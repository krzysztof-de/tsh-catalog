import React from 'react';
import PropTypes from 'prop-types';
import ProductTile from 'app/components/molecues/ProductTile';
import { Wrapper } from './ProductsList.styles';
import { products } from 'data/products';
import useFetch from 'hooks/useFetch';


const ProductsList = () => {
  const { loading, error, data } = useFetch('https://join-tsh-api-staging.herokuapp.com/products')

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <Wrapper>
      {data.items.map(item => (
        <ProductTile key={item.id} itemData={item} />
      ))}
    </Wrapper>
  );
};

/* ProductsList.propTypes = {

} */

export default ProductsList;
