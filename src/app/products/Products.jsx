import React from 'react';
import { Link } from 'react-router-dom';
import ProductsList from 'app/components/organisms/ProductsList';
import { AppRoute } from 'routing/AppRoute.enum';

export const Products = () => {
  return (
    <>
      <h2>Products page </h2>
      <Link to={AppRoute.login}> Login </Link>
      <ProductsList />
    </>
  );
};
