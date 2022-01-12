import React, { useState, useEffect } from 'react';
import { Wrapper, StyledList } from './Pagination.styles';
import PaginationLink from 'app/components/atoms/PaginationLink/PaginationLink';

const Pagination = ({ meta: { currentPage = 1, totalPages = 1 }, handlePageClick }) => {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const links = Array.from({ length: totalPages }, (_, i) => i + 1);
    if (totalPages > 6) {
      if (currentPage > 2) {
        if (currentPage < links.length - 4) {
          links.splice(0, currentPage - 2);
        } else {
          links.splice(0, links.length - 6);
        }
      }
      if (links.length > 6) {
        links.splice(3, links.length - 6, '...');
      }
    }
    setNavLinks(links);
  }, [totalPages, currentPage]);

  if (totalPages <= 1 || currentPage > totalPages) return null;
  return (
    <Wrapper>
      <StyledList>
        <PaginationLink text="First" isDisabled={currentPage === 1} onClick={() => handlePageClick(1)} />
        {navLinks.map((page, i) => (
          <PaginationLink key={i} text={page} isCurrent={currentPage === page} onClick={() => handlePageClick(page)} isDisabled={page === '...'} />
        ))}
        <PaginationLink text="Last" isDisabled={currentPage === navLinks[navLinks.length - 1]} onClick={() => handlePageClick(navLinks.length)} />
      </StyledList>
    </Wrapper>
  );
};

export default Pagination;
