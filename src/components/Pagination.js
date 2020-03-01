import React from 'react';
import PropTypes from 'prop-types';

import PaginationItem from './PaginationItem';
import PreviousPageButton from './PreviousPageButton';
import NextPageButton from './NextPageButton';

import './Pagination.scss';

const Pagination = ({
  currentPage,
  albumsPerPage,
  totalAlbums,
  onChangePage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalAlbums / albumsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  if (pageNumbers.length === 1) return null;

  return (
    <div>
      <nav>
        <ul className="pagination">
          {currentPage === 1 ? (
            <PaginationItem
              btState="disabled"
              itemName={<PreviousPageButton />}
            />
          ) : (
            <PaginationItem
              btState=""
              itemName={<PreviousPageButton />}
              pageNumber={currentPage - 1}
              onChangePage={onChangePage}
            />
          )}
          {pageNumbers.map((number) => {
            return number === currentPage ? (
              <PaginationItem
                key={number}
                btState="active"
                itemName={number}
                pageNumber={number}
                onChangePage={onChangePage}
              />
            ) : (
              <PaginationItem
                key={number}
                btState=""
                itemName={number}
                pageNumber={number}
                onChangePage={onChangePage}
              />
            );
          })}
          {currentPage === pageNumbers.length ? (
            <PaginationItem btState="disabled" itemName={<NextPageButton />} />
          ) : (
            <PaginationItem
              btState=""
              itemName={<NextPageButton />}
              pageNumber={currentPage + 1}
              onChangePage={onChangePage}
            />
          )}
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  albumsPerPage: PropTypes.number.isRequired,
  totalAlbums: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  currentPage: 1,
};

export default Pagination;
