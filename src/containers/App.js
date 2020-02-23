import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import { getAlbums as getAlbumsAction } from '../actions/albums';

import Header from '../components/Header';
import SearchContainer from './SearchContainer';
import AlbumsList from '../components/AlbumsList';
import NoAlbum from '../components/NoAlbum';

import './App.scss';

class App extends React.Component {
  handleSearch = (term) => {
    const { getAlbums } = this.props;

    getAlbums(term);
  };

  render() {
    const { data, loading, error } = this.props;

    return (
      <div className="container">
        <Header />
        <SearchContainer onSearch={this.handleSearch} loading={loading} />
        {error && (
          <div className="error-message">
            <p>The following unexpected error ocurred: {error}</p>
          </div>
        )}
        {data && data.length ? <AlbumsList albums={data} /> : <NoAlbum />}
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      artwork: PropTypes.string,
      artist: PropTypes.string,
      album: PropTypes.string,
    }),
  ).isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  getAlbums: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.albums.data,
  loading: state.albums.loading,
  error: state.albums.error,
});

const mapDispatchToProps = {
  getAlbums: getAlbumsAction,
};

export default hot(connect(mapStateToProps, mapDispatchToProps)(App));
