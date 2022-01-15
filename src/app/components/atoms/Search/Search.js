import React, { useState, useCallback, useContext, useMemo } from 'react';
import { Wrapper } from './Search.styles';
import { StyledSearch } from './Search.styles';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { debounce } from 'lodash';
import { ProductsContext } from 'providers/ProductsProvider';

const Search = (props) => {
  const [value, setValue] = useState('');
  const { handleSearch } = useContext(ProductsContext);

  const delaySearchUpdate = useCallback(
    debounce((search) => handleSearch(search), 500),
    []
  );

  const onChange = (e) => {
    setValue(e.target.value);
    delaySearchUpdate(e.target.value);
  };

  const clearSearch = (e) => {
    setValue(e);
    handleSearch(e);
  };

  return (
    <Wrapper>
      <StyledSearch type="text" name="Search" value={value} placeholder="Search" onChange={onChange} {...props} />
      {value !== '' ? (
        <CloseIcon
          onClick={() => {
            clearSearch('');
          }}
        />
      ) : (
        <SearchIcon />
      )}
    </Wrapper>
  );
};

export default Search;
