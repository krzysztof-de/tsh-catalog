import React, { useState, useEffect, useContext } from 'react';
import { Wrapper } from './Pagination.styles';
import { ProductsContext } from 'providers/ProductsProvider';
import PaginationLink from 'app/components/atoms/PaginationLink/PaginationLink';

const Pagination = () => {
  const {
    loading,
    error,
    data: { meta, links },
  } = useContext(ProductsContext);
  const [navLinks, setNavLinks] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);

  const URL = `https://join-tsh-api-staging.herokuapp.com/products?page=${pageNumber}&limit=${productsPerPage}`;

    /* validate page number */
  const updatePagination = (arr, pages, current) => {
      if (pages > 6) {
        if(current <= 2) {
            return setNavLinks(arr.splice(3, (arr.length -6),'...'))
            /* 1,2,3 ... n-2,n-1,n */
        }
            return arr;
            /* 2,3,4 ... n-2,n-1,n */
        }
        return arr;
      }
      /* leave alone is 1,2,3,4,5,6 */


  useEffect(() => {
    let arr = Array.from({ length: meta.totalPages }, (_, i) => i + 1);
    setNavLinks(arr)
    //setNavLinks(updatePagination(arr, 8, 2))

    //setNavLinks(navLinks.splice(3, 3));
  }, []);

  if (loading) return null;
  if (error) return null;

  console.log(navLinks);
  return (
    <Wrapper>
      <ul className="page-link">
        {/* <li><a className="first pag-num " href="#" disabled>First</a></li> */}
        {/* <li><span aria-current="page" className="pag-num current">1</span></li> */}
        {/* <li><a className="pag-num" href="#">2</a></li> */}
        {navLinks.map((page, i) => (
          <PaginationLink key={i} pageNumber={page} isActive={meta.currentPage === page}/>
        ))}
        {/* <li><a className="last pag-num" href="#">Last</a></li> */}
      </ul>
    </Wrapper>
  );
};

export default Pagination;
