import styled from 'styled-components';
import { Theme } from 'assets/styles/Theme';

export const StyledModal = styled.div`
  width: 80vw;
  max-width: 600px;
  height: 530px;
  background: white;
  box-shadow: 0px 8px 32px rgba(17, 18, 20, 0.158514);
  border-radius: 8px;
  z-index: 1002;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;
  padding: 0 30px;
`;

export const Photo = styled.div`
  height: 354px;
  background-color: ${Theme.colors.grey20};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 8px 8px 4px 4px;
  background-image: url("https://picsum.photos/640/480?random=3107");
`;

export const BlackMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Theme.colors.black};
  z-index: 1001;
  opacity: 0.9;
`;

export const Bottom = styled.div`
  height: 176px;
  padding: 14px 32px;
  display: flex;
  flex-direction: column;
  & > h2 {
    font-size:${Theme.fontSize.xxl};
    line-height:40px;
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
