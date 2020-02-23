import React from 'react';

import './Loading.scss';

const Loading = () => (
  <div className="spinner-container">
    <div className="spinner">
      <span className="spinner-inner-1" />
      <span className="spinner-inner-2" />
      <span className="spinner-inner-3" />
    </div>
  </div>
);

export default Loading;
