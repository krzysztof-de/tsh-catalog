import styled from 'styled-components';
import { Theme } from 'assets/styles/Theme';
import Button from '../atoms/Button/Button';

export const Wrapper = styled.div`
  background: ${Theme.colors.white};
  height: 400px;
  border-radius: 8px;

  
  ${Button} {
    width: 100%;
  }

`;
export const Photo = styled.div`
  height: 170px;
  background-color: ${Theme.colors.grey20};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 8px 8px 0 0;
  position: relative;

`;
export const Promo = styled.div``;
export const Bottom = styled.div`
  padding: 8px 16px;

  span {
    color: ${Theme.colors.grey80};
    font-weight: 400;
    text-transform : capitalize;
  }
`;

