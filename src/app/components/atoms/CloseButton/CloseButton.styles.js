import styled from 'styled-components';
import { Theme } from 'assets/styles/Theme';


export const StyledButton = styled.button`
  width: 32px;
  height: 32px;
  background: none;
  border-radius: 16px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.125s ease-in-out;
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 15px;

  & > svg {
      fill: ${Theme.colors.black};
  }

  &:hover {
    background-color: ${Theme.colors.grey20};
  }
  &:active {
    background-color: ${Theme.colors.grey20};
  }
`;