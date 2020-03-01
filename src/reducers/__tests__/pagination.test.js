import paginationReducer from 'reducers/pagination';
import { CHANGE_PAGE_NUMBER } from 'actions/types';

describe('albums reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      currentPage: 1,
      albumsPerPage: 20,
    };
  });

  it('should return the initial state', () => {
    expect(paginationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle CHANGE_PAGE_NUMBER', () => {
    const action = {
      type: CHANGE_PAGE_NUMBER,
      pageNumber: 2,
    };

    const expectedState = {
      currentPage: 2,
      albumsPerPage: 20,
    };

    expect(paginationReducer(initialState, action)).toEqual(expectedState);
  });
});
