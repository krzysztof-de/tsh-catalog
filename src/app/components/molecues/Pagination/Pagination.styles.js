import styled from 'styled-components';
import { Theme } from 'assets/styles/Theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  margin: 15px 0;
`;

export const StyledList = styled.ul`
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-weight: 600;
  padding: 0;

  & > :first-child {
    margin-right: 15px;
  };
  & > :last-child {
    margin-left: 15px;
  }
`;
