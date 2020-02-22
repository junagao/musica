import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ onSearchTermChange }) => (
  <label className="search-field" htmlFor="search">
    <input
      type="search"
      onChange={onSearchTermChange}
      name="search"
      placeholder="Search"
    />
  </label>
);

SearchInput.propTypes = {
  onSearchTermChange: PropTypes.func.isRequired,
};

export default SearchInput;
