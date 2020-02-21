import React from 'react';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getAlbumsAction from '../actions/albums';

class App extends React.Component {
  componentDidMount() {
    const { getAlbums } = this.props;
    getAlbums();
  }

  render() {
    return <div>hello world</div>;
  }
}

App.propTypes = {
  getAlbums: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  albums: state.albums,
});

const mapDispatchToProps = {
  getAlbums: getAlbumsAction,
};

export default hot(connect(mapStateToProps, mapDispatchToProps)(App));
