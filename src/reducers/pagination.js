import { CHANGE_PAGE_NUMBER } from '../actions/types';

const initialState = {
  currentPage: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE_NUMBER:
      return {
        currentPage: action.pageNumber,
      };
    default:
      return state;
  }
};
