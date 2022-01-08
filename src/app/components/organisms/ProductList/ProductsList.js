import React, { useContext } from 'react';
import ProductTile from 'app/components/molecues/ProductTile/ProductTile';
import { ListGrid, Wrapper } from './ProductsList.styles';
import OopsMsg from 'app/components/atoms/OopsMsg/OopsMsg';
import Spinner from 'app/components/atoms/Spinner/Spinner';
import { ProductsContext } from 'providers/ProductsProvider';
import Pagination from 'app/components/molecues/Pagination/Pagination';
import useFetch from 'hooks/useFetch';

const ProductsList = () => {
  const { loading, error, data } = useFetch();
/* 
  const { loading, error, active, promo, data } = useContext(ProductsContext); */

  if (loading) return <Spinner />;
  if (error) return <OopsMsg />;

  
  console.log(`currentPage: ${data.meta.currentPage}, totalPages:${data.meta.totalPages}, itemsPerPage ${data.meta.itemsPerPage}`);
  return (
    <Wrapper>
      <ListGrid>
        {data.items.map((item) => (
          <ProductTile key={item.id} itemData={item} />
        ))}
      </ListGrid>
    {/*   <Pagination /> */}
    </Wrapper>
  );
};

export default ProductsList;
