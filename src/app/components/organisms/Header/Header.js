import React, { useContext, useState } from 'react';
import { Wrapper } from './Header.styles';
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import Search from 'app/components/atoms/Search/Search';
import { StyledControls, StyledNav, StyledCheckBoxes } from './Header.styles';
import { Logo } from './Header.styles';
import CheckBox from 'app/components/atoms/CheckBox/CheckBox';
import { ProductsContext } from 'providers/ProductsProvider';
import Avatar from 'app/components/atoms/Avatar/Avatar';
import Button from 'app/components/atoms/Button/Button';

const Header = () => {
  const [auth, setAuth] = useState(false);

  const { active, promo, handleChangeActive, handleChangePromo } = useContext(ProductsContext);

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
        {auth ? <Avatar /> : <Link to={AppRoute.login}><Button isSecondary label="Login" /></Link>}
      </StyledNav>
    </Wrapper>
  );
};

export default Header;
