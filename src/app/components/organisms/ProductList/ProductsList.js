import React, { useContext } from 'react';
import ProductTile from 'app/components/molecues/ProductTile/ProductTile';
import { ListGrid, Wrapper } from './ProductsList.styles';
import OopsMsg from 'app/components/atoms/OopsMsg/OopsMsg';
import Spinner from 'app/components/atoms/Spinner/Spinner';
import { ProductsContext } from 'providers/ProductsProvider';
import Pagination from 'app/components/molecues/Pagination/Pagination';

const ProductsList = () => {
  const { loading, error, products, active, promo, data } = useContext(ProductsContext);

  if (loading) return <Spinner />;
  if (error) return <OopsMsg />;

  return (
    <Wrapper>
      <ListGrid>
        {products.map((item) => (
          <ProductTile key={item.id} itemData={item} />
        ))}
      </ListGrid>
      <Pagination />
    </Wrapper>
  );
};

export default ProductsList;
