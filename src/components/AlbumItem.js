import React from 'react';
import PropTypes from 'prop-types';

import './AlbumItem.scss';

const AlbumItem = ({ artist, artwork, album }) => (
  <li className="album-item">
    <img src={artwork.replace('100x100', '200x200')} alt="" />
    <div className="album-details">
      <p className="album-title">{album}</p>
      <p className="album-artist">{artist}</p>
    </div>
  </li>
);

AlbumItem.propTypes = {
  artist: PropTypes.string.isRequired,
  artwork: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
};

export default AlbumItem;
