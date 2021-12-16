import React from 'react';
import { StyledSpinner, WhiteMask } from './Spinner.styles';

const Spinner = () => {
  return (
    <>
      <StyledSpinner>
        <circle className="back" cx="30" cy="30" r="28" />
        <circle className="front" cx="30" cy="30" r="28" />
      </StyledSpinner>
      <WhiteMask />
    </>
  );
};
export default Spinner;
