import styled from 'styled-components';
import { Theme } from 'assets/styles/Theme';

export const Wrapper = styled.div`
  background: ${Theme.colors.white};
  height: 400px;
  border-radius: 8px;
  overflow-y: hidden;
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
  background-size: 100%;
  transition: all 2.2s cubic-bezier(0.14, 1.12, 0.67, 0.99) 0s;

  &.promo::before {
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

  &.active:hover {
    background-size: 110%;
  }
`;

export const Promo = styled.span`
  content: 'Promo';
  position: absolute;
  top: 10;
  left: 0;
`;
export const Active = styled.span``;

export const Bottom = styled.div`
  padding: 8px 16px 24px 16px;
  display: flex;
  flex-direction: column;
`;

export const StyledDesc = styled.div`
  height: 112px;
  & > h3 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 0.9rem 0;
  }
  & > p {
    color: ${Theme.colors.grey80};
    margin: 0;
    font-weight: 400;
    text-transform: capitalize;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
export const StyledControls = styled.div`
  height: 86px;
`;
