import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import { getAlbums as getAlbumsAction } from '../actions/albums';

import SearchContainer from './SearchContainer';

class App extends React.Component {
  handleSearch = (term) => {
    const { getAlbums } = this.props;

    getAlbums(term);
  };

  render() {
    return (
      <div className="container">
        <SearchContainer onSearch={this.handleSearch} />
      </div>
    );
  }
}

App.propTypes = {
  getAlbums: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getAlbums: getAlbumsAction,
};

export default hot(connect(null, mapDispatchToProps)(App));
