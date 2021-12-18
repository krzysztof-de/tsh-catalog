import React from 'react';
import ProductTile from './ProductTile';

export default {
  title: 'Components/Molecues/ProductTile',
  component: ProductTile,
};

const Template = (args) => <ProductTile {...args}/>;

export const Default = Template.bind({});
Default.args = {
    name: 'Awesome Steel Fish',
    description: 'Quam soluta et consequuntur velit ipsa sint facere occaecati fugiat.',
    rating: 2,
    promo: false,
    active: true,
};
