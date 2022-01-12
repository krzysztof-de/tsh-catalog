import React from 'react';
import { StyledAvatar, UserFace, UserMenu } from './Avatar.style';

const foo = () => {//TODO
    alert('logout')
} 

const Avatar = () => {
  return (
    <StyledAvatar>
      <UserFace />
      <UserMenu>
        <div className="menu-item">
            <button onClick={foo}>Sign Out</button>
        </div>
      </UserMenu>
    </StyledAvatar>
  );
};

export default Avatar;
