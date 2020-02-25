import React from 'react';
import PropTypes from 'prop-types';

const ViewTypeButton = ({ onChangeView, viewType, icon }) => (
  <button
    type="button"
    className="view-btn"
    onClick={() => onChangeView(viewType)}
  >
    {icon}
  </button>
);

ViewTypeButton.propTypes = {
  onChangeView: PropTypes.func.isRequired,
  viewType: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default ViewTypeButton;
