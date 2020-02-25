import {
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_ERROR,
} from '../actions/types';

const initialState = {
  data: [],
  loading: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case GET_ALBUMS_SUCCESS:
      return {
        ...state,
        data: action.albums,
        loading: false,
      };
    case GET_ALBUMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    default:
      return state;
  }
};
