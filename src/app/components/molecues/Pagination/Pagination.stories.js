import React from 'react';
import Pagination from './Pagination';

export default {
    title: 'Components/Molecues/Pagination',
    component: Pagination,
};

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
    meta: {
        currentPage: 1,
        totalPages: 29,
    },
}; 