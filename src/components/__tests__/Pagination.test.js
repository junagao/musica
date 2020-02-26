import React from 'react';
import { shallow } from 'enzyme';

import Pagination from 'components/Pagination';

describe('Pagination', () => {
  let wrapper;
  const mockAlbummsPerPage = 5;
  const mockTotalAlbums = 40;
  const onChangePageMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <Pagination
        albumsPerPage={mockAlbummsPerPage}
        totalAlbums={mockTotalAlbums}
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

  it('should render 8 li element', () => {
    expect(wrapper.find('li').length).toEqual(8);
  });

  it('should render 8 li element with className `page-item`', () => {
    expect(wrapper.find('.page-item').every('.page-item')).toBeTruthy();
  });

  it('should render all `a` elements with corresponded href prop and className `page-link`', () => {
    expect(wrapper.find('a').length).toEqual(8);
    expect(
      wrapper
        .find('a')
        .at(0)
        .prop('href'),
    ).toEqual('#1');
    expect(
      wrapper
        .find('a')
        .at(0)
        .hasClass('page-link'),
    ).toBeTruthy();
    expect(
      wrapper
        .find('a')
        .at(1)
        .prop('href'),
    ).toEqual('#2');
    expect(
      wrapper
        .find('a')
        .at(1)
        .hasClass('page-link'),
    ).toBeTruthy();
  });

  it('should render the pages numbers', () => {
    expect(
      wrapper
        .find('a')
        .at(0)
        .text(),
    ).toEqual('1');
    expect(
      wrapper
        .find('a')
        .at(1)
        .text(),
    ).toEqual('2');
  });

  it('should call onChangePage prop passing the page number', () => {
    const number = 4;
    wrapper
      .find('a')
      .at(3)
      .simulate('click', number);
    expect(onChangePageMock).toBeCalledWith(4);
  });
});
