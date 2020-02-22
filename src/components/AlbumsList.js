import React from 'react';
import PropTypes from 'prop-types';

import AlbumItem from './AlbumItem';

const AlbumsList = ({ albums }) => {
  return (
    <div>
      <ul className="album-list">
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
      key: PropTypes.number,
      artwork: PropTypes.string,
      artist: PropTypes.string,
      album: PropTypes.string,
    }),
  ).isRequired,
};

export default AlbumsList;
