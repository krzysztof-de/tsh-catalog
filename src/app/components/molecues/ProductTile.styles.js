import styled from 'styled-components';
import { Theme } from 'assets/styles/Theme';
import Button from '../atoms/Button/Button';

export const Wrapper = styled.div`
  background: ${Theme.colors.white};
  height: 400px;
  border-radius: 8px;
/*   max-width: 288px; */
`;
export const Photo = styled.div`
  height: 170px;
  background-color: ${Theme.colors.grey20};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 8px 8px 0 0;
  position: relative;
  mix-blend-mode: normal;
  opacity: 0.5;
  filter: grayscale(1);
  -webkit-filter: grayscale(1);
  
  &.promo.active::before {
    content: 'Promo';
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 24px;
    color: ${Theme.colors.white};
    background: ${Theme.colors.secondary};
    top: 20px;
    left: 0;
  }
  
  &.active {
    opacity: 1;
    filter: unset;
    -webkit-filter: unset;
  }


`;
export const Promo = styled.span`
  content: 'Promo';
  position: absolute;
  top: 10;
  left: 0;

`;
export const Active = styled.span`

`;

export const Bottom = styled.div`
  padding: 8px 16px;

  span {
    color: ${Theme.colors.grey80};
    font-weight: 400;
    text-transform : capitalize;
  }
`;

