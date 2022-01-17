import styled from 'styled-components';

export const Wrapper = styled.li`
`;

export const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  color: ${({ isCurrent, theme }) => isCurrent ? theme.colors.primary : theme.colors.black};
  color: ${({ isDisabled, theme }) => isDisabled ? theme.colors.grey80 : ''};
  ${({ isCurrent, isDisabled }) => isCurrent || isDisabled ? 'pointer-events: none' : ''};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &[disabled],
  &[disabled]:hover {
    color: ${({ theme }) => theme.colors.grey80};
    pointer-events: none;
    cursor: default;
    user-select: none;
  }
`;
