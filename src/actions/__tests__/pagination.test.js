import changeCurrentPage from 'actions/pagination';
import { CHANGE_PAGE_NUMBER } from 'actions/types';

describe('changeCurrentPage', () => {
  it('has the correct type', () => {
    const action = changeCurrentPage();

    expect(action.type).toEqual(CHANGE_PAGE_NUMBER);
  });

  it('had the correct payload', () => {
    const action = changeCurrentPage(3);

    expect(action.pageNumber).toEqual(3);
  });
});
