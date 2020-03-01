import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import { getAlbums as getAlbumsAction } from '../actions/albums';
import changeCurrentPageAction from '../actions/pagination';

import Header from '../components/Header';
import SearchContainer from './SearchContainer';
import AlbumsList from '../components/AlbumsList';
import ErrorMessage from '../components/ErrorMessage';
import Pagination from '../components/Pagination';

import './App.scss';

export class App extends React.Component {
  handleSearch = (term) => {
    const { getAlbums, changeCurrentPage } = this.props;

    changeCurrentPage(1);
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

  getCurrentAlbums = (albums) => {
    const { currentPage, albumsPerPage } = this.props;
    const indexOfLastAlbum = currentPage * albumsPerPage;
    const indexOfFirstAlbum = indexOfLastAlbum - albumsPerPage;
    return albums.slice(indexOfFirstAlbum, indexOfLastAlbum);
  };

  handleChangePage = (pageNumber) => {
    const { changeCurrentPage } = this.props;

    changeCurrentPage(pageNumber);
  };

  render() {
    const {
      data,
      loading,
      error,
      noResults,
      albumsPerPage,
      currentPage,
    } = this.props;

    return (
      <div className="container">
        <Header />
        <SearchContainer onSearch={this.handleSearch} loading={loading} s />
        {error && <ErrorMessage error={error} />}
        {!error && data.length ? (
          <>
            <AlbumsList
              albums={this.getCurrentAlbums(data)}
              onChangeView={this.handleChangeView}
              noResults={noResults}
            />
            {!noResults && (
              <Pagination
                currentPage={currentPage}
                albumsPerPage={albumsPerPage}
                totalAlbums={data.length}
                onChangePage={this.handleChangePage}
              />
            )}
          </>
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
  albumsPerPage: PropTypes.number,
  currentPage: PropTypes.number,
  changeCurrentPage: PropTypes.func,
};

App.defaultProps = {
  data: [],
  error: '',
  getAlbums: () => {},
  noResults: false,
  albumsPerPage: 20,
  currentPage: 1,
  changeCurrentPage: () => {},
};

const mapStateToProps = (state) => ({
  data: state.albums.data,
  loading: state.albums.loading,
  error: state.albums.error.message,
  noResults: state.albums.noResults,
  currentPage: state.page.currentPage,
});

const mapDispatchToProps = {
  getAlbums: getAlbumsAction,
  changeCurrentPage: changeCurrentPageAction,
};

export const connectedApp = hot(
  connect(mapStateToProps, mapDispatchToProps)(App),
);
