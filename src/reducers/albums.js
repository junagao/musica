import {
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_ERROR,
  NO_RESULTS_FOUND,
} from '../actions/types';

const initialState = {
  data: [],
  loading: false,
  error: '',
  noResults: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
        noResults: false,
      };
    case GET_ALBUMS_SUCCESS:
      return {
        ...state,
        data: action.albums,
        loading: false,
        noResults: false,
      };
    case GET_ALBUMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        noResults: false,
      };
    case NO_RESULTS_FOUND:
      return {
        ...state,
        noResults: true,
        loading: false,
      };
    default:
      return state;
  }
};
