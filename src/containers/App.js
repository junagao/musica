import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import { getAlbums as getAlbumsAction } from '../actions/albums';

import Header from '../components/Header';
import SearchContainer from './SearchContainer';
import AlbumsList from '../components/AlbumsList';
import ErrorMessage from '../components/ErrorMessage';

import './App.scss';

export class App extends React.Component {
  handleSearch = (term) => {
    const { getAlbums } = this.props;

    getAlbums(term);
  };

  handleChangeView = (type) => {
    const albumListContainer = document.getElementsByClassName(
      'albums-list',
    )[0];
    const albumItens = document.getElementsByClassName('album-item');

    if (type === 'list') {
      albumListContainer.classList.replace('grid', 'list');
      albumItens.forEach((i) => i.classList.replace('grid', 'list'));
    } else {
      albumListContainer.classList.replace('list', 'grid');
      albumItens.forEach((i) => i.classList.replace('list', 'grid'));
    }
  };

  render() {
    const { data, loading, error, noResults } = this.props;

    return (
      <div className="container">
        <Header />
        <SearchContainer onSearch={this.handleSearch} loading={loading} s />
        {error && <ErrorMessage error={error} />}
        {!error && data.length ? (
          <AlbumsList
            albums={data}
            onChangeView={this.handleChangeView}
            noResults={noResults}
          />
        ) : null}
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
  ),
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  getAlbums: PropTypes.func,
  noResults: PropTypes.bool,
};

App.defaultProps = {
  data: [],
  error: '',
  getAlbums: () => {},
  noResults: false,
};

const mapStateToProps = (state) => ({
  data: state.albums.data,
  loading: state.albums.loading,
  error: state.albums.error.message,
  noResults: state.albums.noResults,
});

const mapDispatchToProps = {
  getAlbums: getAlbumsAction,
};

export const connectedApp = hot(
  connect(mapStateToProps, mapDispatchToProps)(App),
);
