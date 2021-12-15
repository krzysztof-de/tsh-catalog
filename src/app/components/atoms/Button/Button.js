import React from 'react';
import { StyledButton } from './Button.styles';

const Button = (props) => {
    console.log(props);
  return <StyledButton {...props}>{props.label}</StyledButton>;
};

export default Button;