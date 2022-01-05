import React from 'react';

const PaginationLink = ({pageNumber, onClick, isActive, ...props}) => {
  return (
    <li className={isActive? 'page-item active' : 'page-item'}>
      <a role="button" className="page-link" href="#">
        {pageNumber}
      </a>
    </li>
  );
};

export default PaginationLink;
