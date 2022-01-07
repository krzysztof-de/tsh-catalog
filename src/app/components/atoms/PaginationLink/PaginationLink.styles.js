import styled from 'styled-components';
import { Theme } from 'assets/styles/Theme';

export const Wrapper = styled.li`
  /*   &.page-item.active a {
    color: white;
    background: ${Theme.colors.primary};
    pointer-events: none;
    cursor: default;
  } */
`;

export const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${({isCurrent}) => isCurrent? Theme.colors.primary : Theme.colors.black};
  color: ${({isDisabled}) => isDisabled? Theme.colors.grey80 : ''};
  ${({isCurrent,isDisabled}) => isCurrent || isDisabled ? 'pointer-events: none' : ''};

  &:hover {
    color: ${Theme.colors.primary};
  }

  &[disabled],
  &[disabled]:hover {
    color: ${Theme.colors.grey80};
    pointer-events: none;
    cursor: default;
    user-select: none;
  }
`;
