import React, { useContext } from 'react';
import { Wrapper } from './Header.styles';
/* import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum'; */ // TODO
import Search from 'app/components/atoms/Search/Search';
import { StyledControls, StyledNav, StyledCheckBoxes } from './Header.styles';
import { Logo } from './Header.styles';
import CheckBox from 'app/components/atoms/CheckBox/CheckBox';
import Avatar from 'app/components/atoms/Avatar/Avatar';
import useModal from 'app/components/organisms/Modal/useModal';
import { ProductsContext } from 'providers/ProductsProvider';

const Header = () => {
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();
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
        {/* <Button isSecondary label="Log In" onClick={() => alert('clicked')} /> */}
        <Avatar />
        {/*         
        <Link to={AppRoute.login}> Login </Link> */}
      </StyledNav>
    </Wrapper>
  );
};

export default Header;
