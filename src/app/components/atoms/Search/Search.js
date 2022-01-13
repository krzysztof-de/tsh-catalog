import React, { useState, useCallback, useContext, useRef } from 'react';
import { Wrapper } from './Search.styles';
import { StyledSearch } from './Search.styles';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { debounce } from 'lodash';
import { ProductsContext } from 'providers/ProductsProvider';

const Search = (props) => {
  const searchInput = useRef(null);
  const searchValue = searchInput.current.value;
  const [value, setValue] = useState(null)
  const { handleSearch } = useContext(ProductsContext);



  const delaySearchUpdate = useCallback(
    debounce((search) => handleSearch(search), 500),
    []
  );

  const onChange = () => {
    delaySearchUpdate(searchValue);
    setValue(searchValue)
  };

  const clearSearch = () => {
    searchValue = '';
    onChange();
  };

  return (
    <Wrapper>
      <StyledSearch type="text" name="Search" id="Search" placeholder="Search" onChange={onChange} ref={searchInput} {...props} />
      {value != '' ? <CloseIcon onClick={clearSearch} /> : <SearchIcon />}
    </Wrapper>
  );
};

export default Search;
