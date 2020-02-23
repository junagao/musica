import React from 'react';
import PropTypes from 'prop-types';

import './SearchInput.scss';

const SearchInput = ({ onSearchTermChange }) => (
  <label className="search-field" htmlFor="search">
    <input
      type="search"
      onChange={onSearchTermChange}
      name="search"
      placeholder="Search"
      className="search-input"
    />
  </label>
);

SearchInput.propTypes = {
  onSearchTermChange: PropTypes.func.isRequired,
};

export default SearchInput;
