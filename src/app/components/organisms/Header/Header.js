import React from 'react'
import { Wrapper } from './Header.styles'
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import Search from 'app/components/atoms/Search/Search';
import { Controls } from './Header.styles';
import { Logo } from './Header.styles'

const Header = () => {
    return (
        <Wrapper>
            <Logo>join.tsh.io</Logo>
            <Controls>
            <Search />
            </Controls>
            <Link to={AppRoute.login}> Login </Link>
        </Wrapper>
    )
}

export default Header
