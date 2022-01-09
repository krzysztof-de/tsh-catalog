import React, { useContext, useEffect, useState } from 'react';
import ProductTile from 'app/components/molecues/ProductTile/ProductTile';
import { ListGrid, Wrapper } from './ProductsList.styles';
import OopsMsg from 'app/components/atoms/OopsMsg/OopsMsg';
import Spinner from 'app/components/atoms/Spinner/Spinner';
import { ProductsContext } from 'providers/ProductsProvider';
import Pagination from 'app/components/molecues/Pagination/Pagination';
import{ useProducts } from 'hooks/useProducts'

const ProductsList = () => {
  const [newData, setNewData] = useState([]);
  const { getProducts, error } = useProducts();
  const [loading, setLoading] = useState(true);
  
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const { active, promo } = useContext(ProductsContext);

  let params = `?limit=${limit}&page=${page}`
  if (promo) { params += '&promo=true' };
  if (active) { params += '&active=true' };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getProducts(params);
      setNewData(data);
      setLoading(false);
    })();
  }, [getProducts, active, promo, page]);

  console.log(newData)

  const handlePageClick = (page) => {
    setPage(page)
  };

  if (loading) return <Spinner />;
  if (error) return <OopsMsg />;

  return (
    <Wrapper>
      <ListGrid>
        {newData.items.map((item) => (
          <ProductTile key={item.id} itemData={item} />
        ))}
      </ListGrid>
      <Pagination meta={newData.meta} handlePageClick={handlePageClick} />
    </Wrapper>
  );
};

export default ProductsList;
