import React from 'react';
import PropTypes from 'prop-types';

import './ErrorMessage.scss';

const ErrorMessage = ({ error }) => (
  <div className="error-message">
    <p>The following unexpected error occurred: {error}</p>
  </div>
);

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorMessage;
