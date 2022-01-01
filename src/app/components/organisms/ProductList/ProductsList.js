import React, {useContext} from 'react';
import ProductTile from 'app/components/molecues/ProductTile';
import { Wrapper } from './ProductsList.styles';
import useFetch from 'hooks/useFetch';
import OopsMsg from 'app/components/atoms/OopsMsg/OopsMsg';
import Spinner from 'app/components/atoms/Spinner/Spinner';
import { ItemsContext } from 'app/views/products/Products';

const ProductsList = () => {
  const {active, promo} = useContext(ItemsContext);
  const { loading, error, data } = useFetch('https://join-tsh-api-staging.herokuapp.com/products', active, promo);

  if (loading) return <Spinner />;
  if (error) return <OopsMsg />;

  return (
    <Wrapper>
      {data.map((item) => (
        <ProductTile key={item.id} itemData={item} />
      ))}
    </Wrapper>
  );
};

export default ProductsList;
