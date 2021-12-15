import React from 'react';
import Rating from './Rating';

export default {
  title: 'Components/Atoms/Rating',
  component: Rating,
};

const Template = (args) => <Rating {...args}/>;

export const Default = Template.bind({});
Default.args = {
    rate: 2,
};

