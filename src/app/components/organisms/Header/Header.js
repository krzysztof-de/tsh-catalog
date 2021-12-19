import React from 'react';
import { Wrapper } from './Header.styles';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import Search from 'app/components/atoms/Search/Search';
import { Controls } from './Header.styles';
import { Logo } from './Header.styles';
import CheckBox from 'app/components/atoms/CheckBox/CheckBox';
import Avatar from 'app/components/atoms/Avatar/Avatar';

const Header = () => {
  return (
    <Wrapper>
      <Logo>join.tsh.io</Logo>
      <Controls>
        <Search />
        <CheckBox label="Active" isChecked/>
        <CheckBox label="Promo" />
      </Controls>
      <Avatar />
{/*       <Link to={AppRoute.login}> Login </Link> */}
    </Wrapper>
  );
};

export default Header;
