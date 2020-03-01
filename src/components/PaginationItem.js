import React from 'react';
import PropTypes from 'prop-types';

import './PaginationItem.scss';

const PaginationItem = ({ itemName, btState, pageNumber, onChangePage }) => (
  <li className={`page-item ${btState}`}>
    <a
      onClick={() => onChangePage(pageNumber)}
      href="!#"
      className={`page-link ${btState}`}
    >
      {itemName}
    </a>
  </li>
);

PaginationItem.propTypes = {
  pageNumber: PropTypes.number,
  btState: PropTypes.string,
  onChangePage: PropTypes.func,
  itemName: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

PaginationItem.defaultProps = {
  btState: '',
  onChangePage: () => {},
  pageNumber: 0,
};

export default PaginationItem;
