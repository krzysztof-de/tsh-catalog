import React from 'react';
import { Wrapper } from './Header.styles';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import Search from 'app/components/atoms/Search/Search';
import { StyledControls, StyledLeft, StyledNav, StyledCheckBoxes } from './Header.styles';
import { Logo } from './Header.styles';
import CheckBox from 'app/components/atoms/CheckBox/CheckBox';
import Avatar from 'app/components/atoms/Avatar/Avatar';

const Header = () => {
  return (
    <Wrapper>
        <Logo>join.tsh.io</Logo>
      <StyledControls>
        <Search/>
        <StyledCheckBoxes>
          <CheckBox label="Active" isChecked/>
          <CheckBox label="Promo" />
        </StyledCheckBoxes>
      </StyledControls>
      <StyledNav>
        <Avatar />
        {/*       <Link to={AppRoute.login}> Login </Link> */}
      </StyledNav>
    </Wrapper>
  );
};

export default Header;
