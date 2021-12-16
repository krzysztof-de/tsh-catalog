import React from 'react'
import { Wrapper } from './Header.styles'
import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import Search from 'app/components/atoms/Search/Search';

const Header = () => {
    return (
        <Wrapper>
            <div>
            <span>join.tsh.io</span>
            <Search />
            </div>
            <div>
            <Link to={AppRoute.login}> Login </Link>
            </div>
        </Wrapper>
    )
}

export default Header
