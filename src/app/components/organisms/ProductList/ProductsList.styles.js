import styled from 'styled-components';
import { Theme } from 'assets/styles/Theme';

export const ListGrid = styled.div`
  grid-gap: 24px;
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);

  @media (min-width: ${Theme.breakePoints.xLarge + 1}px) and (max-width: ${Theme.breakePoints.xxLarge}px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: ${Theme.breakePoints.large + 1}px) and (max-width: ${Theme.breakePoints.xLarge}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${Theme.breakePoints.small + 1}px) and (max-width: ${Theme.breakePoints.large}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${Theme.breakePoints.small}px) {
    grid-template-columns: repeat(1, 1fr);
  }

  & > * {
    max-width: 350px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6vw;
  margin-right: 6vw;
`;
