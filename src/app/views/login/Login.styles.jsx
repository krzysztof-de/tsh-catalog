import FormField from 'app/components/atoms/FormField/FormField';
import styled from 'styled-components';
import { Theme } from 'assets/styles/Theme';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const StyledForm = styled.div`
  max-width: 500px;
  button[type='submit'] {
    margin: 56px 0 16px 0;
    height: 48px;
    font-size: 16px;
  }
`;

export const Photo = styled.div`
  flex: 3;
  background-image: url(/images/bridge.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  transition: flex 0.25s ease-in-out;

  @media (max-width: 660px) {
    flex: 0;
  }
`;

export const RightSide = styled.div`
  background: white;
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 14vw 50px 8vw;
  transition: flex 0.25s ease-in-out;

  @media (max-width: 660px) {
    padding: 50px 8vw;
    flex: 1;
  }
`;
export const FutureFooter = styled.div``;
