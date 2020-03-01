import React from 'react';
import PropTypes from 'prop-types';

import './ViewTypeButton.scss';

const ViewTypeButton = ({ onChangeView, viewType, icon, btState }) => (
  <button
    type="button"
    className={`view-btn ${viewType}-btn ${btState}`}
    onClick={() => onChangeView(viewType)}
  >
    {icon}
  </button>
);

ViewTypeButton.propTypes = {
  onChangeView: PropTypes.func.isRequired,
  viewType: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  btState: PropTypes.string,
};

ViewTypeButton.defaultProps = {
  btState: '',
};

export default ViewTypeButton;
