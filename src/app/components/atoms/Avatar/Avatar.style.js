import styled from 'styled-components';
import { Theme } from 'assets/styles/Theme';

export const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const UserFace = styled.div`
  display: inline-block;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 50%;
  background-image: url(/images/user.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
`;

export const UserMenu = styled.ul`
  z-index: 100;
  position: absolute;
  inset: 0px 0px auto auto;
  margin: 0px;
  transform: translate(0, 62px);
  flex-direction: column;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0px 8px 32px rgba(17, 18, 20, 0.16);
  padding: 4px 0;
  list-style: none;
  width: 184px;
`;

export const ListItem = styled.li`
  padding: 16px;
  margin: 0;
  list-style: none;
  width: 100%;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: ${Theme.colors.primary};
    background: ${Theme.colors.grey20};
  }
`;
