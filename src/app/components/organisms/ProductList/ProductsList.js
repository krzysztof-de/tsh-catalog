import React, { useContext, useEffect, useState } from 'react';
import ProductTile from 'app/components/molecues/ProductTile/ProductTile';
import { ListGrid, Wrapper } from './ProductsList.styles';
import OopsMsg from 'app/components/atoms/OopsMsg/OopsMsg';
import Spinner from 'app/components/atoms/Spinner/Spinner';
import { ProductsContext } from 'providers/ProductsProvider';
import Pagination from 'app/components/molecues/Pagination/Pagination';
import useFetch from 'hooks/useFetch';

const ProductsList = () => {
  const [limit, setLimit] = useState(2);
  const [page, setPage] = useState(2);
  const { active, promo } = useContext(ProductsContext);
  let params = `?limit=${limit}&page=${page}`
  if (promo) { params += '&promo=true' };
  if (active) { params += '&active=true' };

  const { loading, error, data } = useFetch(params);
  console.log('call fetch')

  const handlePageClick = (x) => {
    alert(x)
  };

  if (loading) return <Spinner />;
  if (error) return <OopsMsg />;

  //console.log(`currentPage: ${data.meta.currentPage}, totalPages:${data.meta.totalPages}, itemsPerPage ${data.meta.itemsPerPage}`);
  return (
    <Wrapper>
      <ListGrid>
        {data.items.map((item) => (
          <ProductTile key={item.id} itemData={item} />
        ))}
      </ListGrid>
      <Pagination meta={data.meta} handlePageClick={handlePageClick} />
    </Wrapper>
  );
};

export default ProductsList;
