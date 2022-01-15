import styled,{ keyframes } from 'styled-components';
import { Theme } from 'assets/styles/Theme';

const showDrop = keyframes`
  from {
    opacity: 0;
    transform: translateY(0);
  }

  to {
    opacity: 1;
    transform: translateY(62px);
  }
`;

export const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const UserFace = styled.div`
  z-index: 100;
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
  z-index: 99;
  position: absolute;
  transform: translateY(62px);
  overflow: hidden;
  inset: 0px 0px auto auto;
  margin: 0px;
  flex-direction: column;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0px 8px 32px rgba(17, 18, 20, 0.16);
  padding: 0;
  list-style: none;
  width: 184px;
  animation: ${showDrop} .25s ease 1;
`;

export const ListItem = styled.li`
  padding: 16px;
  margin: 0;
  list-style: none;
  width: 100%;
  cursor: pointer;
  user-select: none;
  transition: color 0.125s linear forwards;

  &:hover {
    color: ${Theme.colors.primary};
  }
`;
