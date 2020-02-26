import api from '../api';

import {
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_ERROR,
  NO_RESULTS,
} from './types';

export const getAlbumsRequest = () => ({
  type: GET_ALBUMS_REQUEST,
});

export const getAlbumsSuccess = (albums) => ({
  type: GET_ALBUMS_SUCCESS,
  albums,
});

export const noResultsFound = () => ({
  type: NO_RESULTS,
});

export const getAlbumsError = (error) => ({
  type: GET_ALBUMS_ERROR,
  error,
});

export const getAlbums = (term, limit = 20) => async (dispatch) => {
  dispatch(getAlbumsRequest());
  try {
    const response = await api.get(
      `?media=music&entity=album&term=${term}&limit=${limit}`,
    );
    if (response.data.resultCount === 0) {
      dispatch(noResultsFound());
    } else {
      dispatch(getAlbumsSuccess(response.data.results));
    }
  } catch (e) {
    dispatch(getAlbumsError(e));
  }
};

export default getAlbums;
