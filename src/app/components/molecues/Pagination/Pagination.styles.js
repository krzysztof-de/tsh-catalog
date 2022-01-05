import styled from 'styled-components';
import { Theme } from 'assets/styles/Theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  margin: 15px 0;

  ul.page-link {
    width: 100%;
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
    list-style: none;
    font-weight: 600;
    padding: 0;
  }
/*   ul.page-link:before {
      content: 'First';
  }
  ul.page-link:after {
      content: 'Last';
  }
 */
  ul.page-link li a.first {
    margin-right: 15px;
  }
  ul.page-link li a.last {
    margin-left: 15px;
  }
  ul.page-link li a {
    text-decoration: none;
    color: ${Theme.colors.black};
  }
  ul.page-link li a:hover {
    color: ${Theme.colors.primary};
  }
  ul.page-link li.page-item.active a {
    color: ${Theme.colors.primary};
    pointer-events: none;
    cursor: default;
  }

  ul.page-link li a[disabled],
  ul.page-link li a[disabled]:hover {
    color: ${Theme.colors.grey80};
    pointer-events: none;
    cursor: default;
    user-select: none;
  }
`;
