import React from 'react';
import ProductTile from './ProductTile';

export default {
  title: 'Components/Molecues/ProductTile',
  component: ProductTile,
};

const Template = (args) => <ProductTile {...args} />;

export const Default = Template.bind({});
Default.args = {
  itemData: {
    id: 1,
    name: 'Awesome Steel Fish',
    description: 'Quam soluta et consequuntur velit ipsa sint facere occaecati fugiat.',
    rating: 2,
    image: "https://picsum.photos/640/480?random=4946",
    promo: false,
    active: true,
  },
};