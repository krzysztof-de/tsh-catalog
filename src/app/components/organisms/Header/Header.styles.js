import styled from 'styled-components';

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 144px;
  padding: 48px 6vw;
  display: flex;
  align-items: center;
  z-index: 1000;
  background: white;
  justify-content: space-between;
`;
export const Controls = styled.div`
  margin-right: auto;
  display: flex;
  align-items: center;

  & > * {
      margin-right: 1rem ;
  }
`;
export const Logo = styled.span`
  font-size: 24px;
  font-weight: 600;
  margin-right: 105px
`;

