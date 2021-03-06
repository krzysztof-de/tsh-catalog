import styled from 'styled-components';

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 48px 6vw;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  z-index: 1000;
  background: white;
  align-items: center;
  min-width: 280px !important;

  @media (max-width: 1000px) {
    height: 216px;
  }

  @media (max-width: 660px) {
    height: 248px;
    padding: 48px 6vw 32px 6vw;
  }
`;

export const StyledControls = styled.div`
  display: flex;
  gap: 24px;
  width: 600px;
  & > * {
    flex: 1;
  }

  @media (max-width: 1000px) {
    order: 1;
    width: 100%;
  }

  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

export const StyledCheckBoxes = styled.div`
  display: flex;
`;

export const StyledNav = styled.nav`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
