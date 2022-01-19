import React, { useContext, useState } from 'react';
import { Wrapper } from './Header.styles';
import { useHistory } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import Search from 'app/components/atoms/Search/Search';
import { StyledControls, StyledNav, StyledCheckBoxes } from './Header.styles';
import CheckBox from 'app/components/atoms/CheckBox/CheckBox';
import { ProductsContext } from 'providers/ProductsProvider';
import Avatar from 'app/components/atoms/Avatar/Avatar';
import Button from 'app/components/atoms/Button/Button';
import Logo from 'app/components/atoms/Logo/Logo';

const Header = () => {
  const history = useHistory();
  const [auth, setAuth] = useState(true);

  const handleFakeLogin = (path) => {
    history.push(path);
  };

  const handleLogout = () => {
    setAuth(false);
  };

  const { active, promo, handleChangeActive, handleChangePromo } = useContext(ProductsContext);

  return (
    <Wrapper>
      <Logo />
      <StyledControls>
        <Search />
        <StyledCheckBoxes>
          <CheckBox label="Active" id="active" name="active" value={active} onChange={handleChangeActive} />
          <CheckBox label="Promo" id="promo" name="promo" value={promo} onChange={handleChangePromo} />
        </StyledCheckBoxes>
      </StyledControls>
      <StyledNav>
        {auth ? <Avatar handleLogout={handleLogout} /> : <Button isSecondary label="Login" onClick={() => handleFakeLogin(AppRoute.login)} />}
      </StyledNav>
    </Wrapper>
  );
};

export default Header;
