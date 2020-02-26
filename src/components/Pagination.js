import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ albumsPerPage, totalAlbums, onChangePage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalAlbums / albumsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => onChangePage(number)}
                href={`#${number}`}
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  albumsPerPage: PropTypes.number.isRequired,
  totalAlbums: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

export default Pagination;
