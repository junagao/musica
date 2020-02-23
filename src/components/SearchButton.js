import React from 'react';
import PropTypes from 'prop-types';
import { IoIosSearch } from 'react-icons/io';

import Loading from './Loading';
import './SearchButton.scss';

const SearchButton = ({ loading }) => {
  return loading ? (
    <Loading />
  ) : (
    <button type="submit" className="search-button">
      <IoIosSearch />
    </button>
  );
};

SearchButton.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default SearchButton;
