import styled from 'styled-components';
import { Theme } from 'assets/styles/Theme';

const white = Theme.colors.white;
const primary = Theme.colors.primary;
const primaryHover = Theme.colors.primaryHover;

export const StyledButton = styled.button`
  width: ${(props) => (props.isFullWidth ? '100%' : 'auto')};
  height: 38px;
  color: ${({ isSecondary }) => (isSecondary ? primary : white)};
  font-size: ${Theme.fontSize.m};
  background-color: ${({ isSecondary }) => (isSecondary ? white : primary)};
  border: 1px solid;
  border-color: ${primary};
  padding: 11px 24px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.125s ease-in-out;
  cursor: pointer;

  ${({ disabled }) => {
    if (disabled) {
      return `cursor: default;
        pointer-events: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-color: ${Theme.colors.grey80};
        border-color: ${Theme.colors.grey80};
        color: ${white};`;
    }
  }};

  &:hover {
    background-color: ${({ isSecondary }) => (isSecondary ? white : primaryHover)};
    color: ${({ isSecondary }) => (isSecondary ? primaryHover : white)};
  }
  &:active {
    background-color: ${({ isSecondary }) => (isSecondary ? white : primaryHover)};
  }
`;
