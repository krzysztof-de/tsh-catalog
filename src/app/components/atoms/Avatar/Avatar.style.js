import styled from 'styled-components';

export const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
`;

export const UserFace = styled.div`
  display: inline-block;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  position: relative;
  border-radius: 50%;
  background-image: url(/images/user.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
`;

export const UserMenu = styled.div`
  z-index: 100;
  position: fixed;
  inset: 0px 0px auto auto;
  margin: 0px;
  transform: translate(-106px,107px);
  flex-direction: column;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0px 8px 32px rgba(17, 18, 20, 0.16);
  padding: 20px;
  list-style: none;
  width: 184px;
  display: none;

  & > .menu-item {
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      text-decoration: none;
    }
  }
`;
