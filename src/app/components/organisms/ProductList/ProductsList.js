import React from 'react';
import PropTypes from 'prop-types';
import ProductTile from 'app/components/molecues/ProductTile';
import { Wrapper } from './ProductsList.styles';
import useFetch from 'hooks/useFetch';
import OopsMsg from 'app/components/atoms/OopsMsg/OopsMsg';
import Spinner from 'app/components/atoms/Spinner/Spinner';


const ProductsList = () => {
  const { loading, error, data } = useFetch('https://join-tsh-api-staging.herokuapp.com/products')

  if (loading) return <Spinner />;
  if (error) return <OopsMsg />;

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
