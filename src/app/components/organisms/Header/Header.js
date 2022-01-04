import React, { useState, useContext } from 'react';
import { Wrapper } from './Header.styles';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import Search from 'app/components/atoms/Search/Search';
import { StyledControls, StyledLeft, StyledNav, StyledCheckBoxes } from './Header.styles';
import { Logo } from './Header.styles';
import CheckBox from 'app/components/atoms/CheckBox/CheckBox';
import Avatar from 'app/components/atoms/Avatar/Avatar';
import Button from 'app/components/atoms/Button/Button';
import { ItemsContext } from 'app/views/products/Products';


const Header = () => {
  const {active, promo, handleChangeActive, handleChangePromo} = useContext(ItemsContext);

  return (
    <Wrapper>
      <Logo>join.tsh.io</Logo>
      <StyledControls>
        <Search />
        <StyledCheckBoxes>
          <CheckBox label="Active" id="active" name="active" value={active} onChange={handleChangeActive} />
          <CheckBox label="Promo" id="promo" name="promo" value={promo} onChange={handleChangePromo} />
        </StyledCheckBoxes>
      </StyledControls>
      <StyledNav>
        {/* <Button isSecondary label="Log In" onClick={() => alert('clicked')} /> */}
        <Avatar />
        {/*         
        <Link to={AppRoute.login}> Login </Link> */}
      </StyledNav>
    </Wrapper>
  );
};

export default Header;
