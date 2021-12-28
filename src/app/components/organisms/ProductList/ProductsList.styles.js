import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-gap: 24px;
  display: inline-grid;
  margin-left: 6vw;
  margin-right: 6vw;
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
    max-width: 400px
  }
`;
