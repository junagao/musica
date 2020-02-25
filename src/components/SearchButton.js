import React from 'react';
import { IoIosSearch } from 'react-icons/io';

import './SearchButton.scss';

const SearchButton = () => (
  <button type="submit" className="search-button">
    <IoIosSearch />
  </button>
);

export default SearchButton;
