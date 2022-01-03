import React from 'react';
import { StyledButton } from './CloseButton.styles';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';

const CloseButton = (props) => {
  return (
    <StyledButton {...props}>
      <CloseIcon />
    </StyledButton>
  );
};

export default CloseButton;
