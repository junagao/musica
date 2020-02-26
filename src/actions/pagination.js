import { CHANGE_PAGE_NUMBER } from './types';

const changeCurrentPage = (pageNumber) => ({
  type: CHANGE_PAGE_NUMBER,
  pageNumber,
});

export default changeCurrentPage;
