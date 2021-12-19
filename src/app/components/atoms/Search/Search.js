import React from 'react';
import { Wrapper } from './Search.styles';
import { StyledSearch } from './Search.styles';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg'

const Search = (props) => {
  return (
    <Wrapper>
        <StyledSearch type="text" name="Search" id="Search" placeholder="Search" {...props}/>
        <SearchIcon />
    </Wrapper>
  );
};

export default Search;
