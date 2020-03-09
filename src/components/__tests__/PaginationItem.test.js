import React from 'react';
import { shallow } from 'enzyme';

import PaginationItem from 'components/PaginationItem';

describe('PaginationItem', () => {
  let wrapper;
  const itemNameMock = '1';
  const btStateMock = 'active';
  const pageNumberMock = 1;
  const onChangePageMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <PaginationItem
        itemName={itemNameMock}
        btState={btStateMock}
        pageNumber={pageNumberMock}
        onChangePage={onChangePageMock}
      />,
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one `a` element with corresponded href prop and className `page-link`', () => {
    expect(wrapper.find('a').length).toEqual(1);
    expect(wrapper.find('a').prop('href')).toEqual('!#');
    expect(wrapper.find('a').hasClass('page-link')).toBeTruthy();
  });

  it('should render the pages numbers', () => {
    expect(wrapper.find('a').text()).toEqual('1');
  });

  it('should call onChangePage prop passing the page number', () => {
    const number = 1;
    wrapper.find('a').simulate('click', number);
    expect(onChangePageMock).toBeCalledWith(1);
  });
});
