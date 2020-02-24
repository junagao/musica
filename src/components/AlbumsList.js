import React from 'react';
import PropTypes from 'prop-types';
import { FaThList, FaThLarge } from 'react-icons/fa';

import AlbumItem from './AlbumItem';

import './AlbumsList.scss';

const AlbumsList = ({ albums, onChangeView }) => {
  return (
    <div className="albums-list-container">
      <div className="albums-list-header">
        <h2>Albums</h2>
        <div className="view-type-container">
          <button
            type="button"
            className="view-btn"
            onClick={() => onChangeView('list')}
          >
            <FaThList />
          </button>
          <button
            type="button"
            className="view-btn"
            onClick={() => onChangeView('grid')}
          >
            <FaThLarge />
          </button>
        </div>
      </div>

      <ul className="albums-list grid">
        {albums.map((album) => {
          const {
            collectionId,
            artistName,
            artworkUrl100,
            collectionName,
          } = album;
          return (
            <AlbumItem
              key={collectionId}
              artwork={artworkUrl100}
              artist={artistName}
              album={collectionName}
            />
          );
        })}
      </ul>
    </div>
  );
};

AlbumsList.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      artwork: PropTypes.string,
      artist: PropTypes.string,
      album: PropTypes.string,
    }),
  ).isRequired,
  onChangeView: PropTypes.func.isRequired,
};

export default AlbumsList;