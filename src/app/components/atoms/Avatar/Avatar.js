import React, { useEffect, useRef, useState } from 'react';
import { ListItem, StyledAvatar, UserFace, UserMenu } from './Avatar.style';

const Avatar = () => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const clickedOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', clickedOutside);
    return () => {
      document.removeEventListener('mousedown', clickedOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const itemAction = () => {
    setIsOpen(false);
  };

  return (
    <StyledAvatar ref={ref}>
      <UserFace onClick={toggleDropdown} />
      {isOpen && (
        <UserMenu>
          <ListItem onClick={itemAction}>Logut</ListItem>
        </UserMenu>
      )}
    </StyledAvatar>
  );
};

export default Avatar;
