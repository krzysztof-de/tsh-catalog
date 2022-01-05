import styled from 'styled-components';

export const ListGrid = styled.div`
  grid-gap: 24px;
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);

  @media (min-width: 1367px) and (max-width: 1610px) {
    grid-template-columns: repeat(4, 1fr);

  }
  @media (min-width: 1001px) and (max-width: 1366px) {
    grid-template-columns: repeat(3, 1fr);

  }
  @media (min-width: 679px) and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);

  }
  @media (max-width: 678px) {
    grid-template-columns: repeat(1, 1fr);

  }

  & > * {
    max-width: 350px
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6vw;
  margin-right: 6vw;
`

