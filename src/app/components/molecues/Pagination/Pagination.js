import React, { useState, useEffect, useContext } from 'react';
import { Wrapper, StyledList } from './Pagination.styles';
import { ProductsContext } from 'providers/ProductsProvider';
import PaginationLink from 'app/components/atoms/PaginationLink/PaginationLink';

const Pagination = () => {
  const {
    handlePageClick,
    loading,
    error,
    data: {
      meta: { currentPage, totalPages, itemsPerPage },
      links,
    },
  } = useContext(ProductsContext);
  const [navLinks, setNavLinks] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(8);

  useEffect(() => {
    const pagLinks = Array.from({ length: totalPages }, (_, i) => i + 1);
    if (totalPages > 6) {
      if (currentPage > 2) {
        if (currentPage < pagLinks.length - 4) {
          pagLinks.splice(0, currentPage - 2);
        } else {
          pagLinks.splice(0, pagLinks.length - 6);
        }
      }
      if (pagLinks.length > 6) {
        pagLinks.splice(3, pagLinks.length - 6, '...');
      }
    }
    setNavLinks(pagLinks);
  }, [itemsPerPage]);

  if (error || totalPages <= 1) return null;

  console.log(navLinks);
  return (
    <Wrapper>
      <StyledList >
          <PaginationLink text='First' isDisabled={currentPage === 1} onClick={() => handlePageClick('first one')}/>
          {navLinks.map((page, i) => (
            <PaginationLink key={i} text={page} isCurrent={currentPage === page} onClick={() => handlePageClick(page)} isDisabled={page === '...'}/>
          ))}
          <PaginationLink text='Last' isDisabled={currentPage === navLinks[navLinks.length -1 ]} onClick={() => handlePageClick('last one')}/>
      </StyledList>
    </Wrapper>
  );
};

export default Pagination;
