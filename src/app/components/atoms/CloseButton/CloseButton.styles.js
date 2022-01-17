import styled from 'styled-components';

export const StyledButton = styled.svg`
  width: 32px;
  height: 32px;
  background: none;
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 15px;

  path {
    fill: ${({ theme }) => theme.colors.black};
    transform: translate(4px,5px);
  }

  circle {
    fill: ${({ theme }) => theme.colors.grey20};
    transition: all 0.225s ease-in-out;
    opacity: 0;
  }

  &:hover circle,
  &:active circle {
    opacity: 0;
  }
`;
