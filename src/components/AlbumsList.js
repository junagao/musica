import React from 'react';
import PropTypes from 'prop-types';

import AlbumItem from './AlbumItem';

import './AlbumsList.scss';

const AlbumsList = ({ albums }) => {
  return (
    <div className="albums-list-container">
      <h2>Albums</h2>
      <ul className="albums-list">
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
};

export default AlbumsList;
