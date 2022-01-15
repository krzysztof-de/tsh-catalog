import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 170px;

  @media (max-width: 1000px) {
    padding-top: 244px;
  }

  @media (max-width: 660px) {
    padding-top: 290px;
  }
`;
