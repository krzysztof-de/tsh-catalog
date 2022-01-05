import React, {useContext} from 'react';
import ProductTile from 'app/components/molecues/ProductTile';
import { Wrapper } from './ProductsList.styles';
import OopsMsg from 'app/components/atoms/OopsMsg/OopsMsg';
import Spinner from 'app/components/atoms/Spinner/Spinner';
import { ProductsContext } from 'providers/ProductsProvider';

const ProductsList = () => {
  const {loading, error, products, active, promo, data} = useContext(ProductsContext);

  if (loading) return <Spinner />;
  if (error) return <OopsMsg />;

  return (
    <Wrapper>
      {products.map((item) => (
        <ProductTile key={item.id} itemData={item} />
      ))}
    </Wrapper>
  );
};

export default ProductsList;
