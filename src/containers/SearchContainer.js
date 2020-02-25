import React from 'react';
import PropTypes from 'prop-types';

import SearchButton from '../components/SearchButton';
import SearchInput from '../components/SearchInput';
import Loading from '../components/Loading';

import './SearchContainer.scss';

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
    const { loading } = this.props;
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <SearchInput onSearchTermChange={this.onSearchTermChange} />
        {loading ? <Loading /> : <SearchButton />}
      </form>
    );
  }
}

SearchContainer.propTypes = {
  onSearch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SearchContainer;
