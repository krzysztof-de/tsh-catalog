import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Button primary',
    isFullWidth: false,
    isSecondary: false,
    disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button secondary',
    isFullWidth: false,
    isSecondary: true,
    disabled: false,
};