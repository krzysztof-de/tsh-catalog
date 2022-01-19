import React from 'react';
import { Wrapper, StyledLink } from './PaginationLink.styles';

const PaginationLink = (props) => {
  return (
    <Wrapper>
      <StyledLink {...props} role="button">
        {props.text}
      </StyledLink>
    </Wrapper>
  );
};

export default PaginationLink;
