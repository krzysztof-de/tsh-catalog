import styled from 'styled-components';

export const ListGrid = styled.div`
  grid-gap: 24px;
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);

  @media (min-width: ${({ theme }) => theme.breakePoints.xLarge + 1}px) and (max-width: ${({ theme }) => theme.breakePoints.xxLarge}px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakePoints.large + 1}px) and (max-width: ${({ theme }) => theme.breakePoints.xLarge}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakePoints.small + 1}px) and (max-width: ${({ theme }) => theme.breakePoints.large}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakePoints.small}px) {
    grid-template-columns: repeat(1, 1fr);
  }

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6vw;
  margin-right: 6vw;
  margin-bottom: 40px;
`;
