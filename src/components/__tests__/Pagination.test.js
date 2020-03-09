import React from 'react';
import { shallow } from 'enzyme';

import Pagination from 'components/Pagination';
import PaginationItem from 'components/PaginationItem';

describe('Pagination', () => {
  let wrapper;
  const currentPageMock = 1;
  const albummsPerPageMock = 5;
  const totalAlbumsMock = 40;
  const onChangePageMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Pagination
        currentPage={currentPageMock}
        albumsPerPage={albummsPerPageMock}
        totalAlbums={totalAlbumsMock}
        onChangePage={onChangePageMock}
      />,
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one div element', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render one nav element', () => {
    expect(wrapper.find('nav').length).toEqual(1);
  });

  it('should render one ul element', () => {
    expect(wrapper.find('ul').length).toEqual(1);
  });

  it('should render 10 instances of PaginationItem element', () => {
    expect(wrapper.find(PaginationItem).length).toEqual(10);
  });

  it('should render 8 li element with className `page-item`', () => {
    expect(wrapper.find('.page-item').every('.page-item')).toBeTruthy();
  });
});
