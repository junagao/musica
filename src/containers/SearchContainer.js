import React from 'react';
import PropTypes from 'prop-types';

import SearchButton from '../components/SearchButton';
import SearchInput from '../components/SearchInput';

class SearchContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
    };
  }

  onSearchTermChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = (e) => {
    const { onSearch } = this.props;
    const { searchTerm } = this.state;
    e.preventDefault();
    onSearch(searchTerm);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <SearchInput onSearchTermChange={this.onSearchTermChange} />
        <SearchButton />
      </form>
    );
  }
}

SearchContainer.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchContainer;
