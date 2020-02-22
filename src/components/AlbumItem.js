import React from 'react';
import PropTypes from 'prop-types';

const AlbumItem = ({ artwork, artist, album }) => (
  <li className="album-item">
    <img src={artwork} alt="" />
    <p>{artist}</p>
    <p>{album}</p>
  </li>
);

AlbumItem.propTypes = {
  artwork: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
};

export default AlbumItem;
