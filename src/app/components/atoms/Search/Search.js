import React, { useCallback, useContext } from 'react';
import { Wrapper } from './Search.styles';
import { StyledSearch } from './Search.styles';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { debounce } from 'lodash';
import { ProductsContext } from 'providers/ProductsProvider';

const Search = (props) => {
  const { handleSearch } = useContext(ProductsContext);
  const delaySearchUpdate = useCallback(
    debounce((search) => handleSearch(search), 1000),
    []
  );
  const onChange = (e) => {
    delaySearchUpdate(e.target.value);
  };

  return (
    <Wrapper>
      <StyledSearch type="text" name="Search" id="Search" placeholder="Search" onChange={onChange} {...props} />
      <SearchIcon />
    </Wrapper>
  );
};

export default Search;
