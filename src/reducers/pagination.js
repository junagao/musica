import { CHANGE_PAGE_NUMBER } from '../actions/types';

const initialState = {
  currentPage: 1,
  albumsPerPage: 20,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE_NUMBER:
      return {
        ...state,
        currentPage: action.pageNumber,
      };
    default:
      return state;
  }
};
