import styled from 'styled-components';

export const StyledButton = styled.button`
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'auto')};
  height: 38px;
  color: ${({ isSecondary, theme }) => (isSecondary ? theme.colors.primary : theme.colors.white)};
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ isSecondary, theme }) => (isSecondary ? theme.colors.white : theme.colors.primary)};
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary};
  padding: 11px 24px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.125s ease-in-out;
  cursor: pointer;
  user-select: none;

  ${({ disabled }) => {
    if (disabled) {
      return `cursor: default;
        pointer-events: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-color: ${({ theme }) => theme.colors.grey80};
        border-color: ${({ theme }) => theme.colors.grey80};
        color: ${({ theme }) => theme.color.white};`;
    }
  }};

  &:hover {
    background-color: ${({ isSecondary, theme }) => (isSecondary ? theme.colors.white : theme.colors.primaryHover)};
    color: ${({ isSecondary, theme }) => (isSecondary ? theme.colors.primaryHover : theme.colors.white)};
  }
  &:active {
    background-color: ${({ isSecondary, theme }) => (isSecondary ? theme.colors.white : theme.colors.primaryHover)};
  }
`;
