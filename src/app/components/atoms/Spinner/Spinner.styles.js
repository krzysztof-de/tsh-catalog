import styled, { keyframes } from 'styled-components';
import { Theme } from 'assets/styles/Theme';

const dash = keyframes`
  to {
    stroke-dashoffset: 1000;
  }
`;

export const StyledSpinner = styled.svg`
  z-index: 1002;
  position: absolute;
  width: 60px;
  height: 60px;
  top: calc(50% - 30px);
  left: calc(50% - 30px);

  circle.back {
    fill: none;
    stroke: ${Theme.colors.grey40};
    stroke-width: 4px;
  }
  circle.front {
    fill: none;
    stroke: ${Theme.colors.primary};
    stroke-width: 4px;
    stroke-linecap: round;
    stroke-dasharray: 100;
    animation: ${dash} 5s linear infinite reverse;
    -webkit-animation: ${dash} 5s linear infinite reverse;
  }
`;

export const WhiteMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Theme.colors.white};
  z-index: 1001;
  opacity: 0.8;
`;
