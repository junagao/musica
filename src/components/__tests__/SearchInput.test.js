import React from 'react';
import { shallow } from 'enzyme';

import SearchInput from 'components/SearchInput';

describe('SearchInput', () => {
  let wrapper;
  const onSearchTermChangeMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <SearchInput onSearchTermChange={onSearchTermChangeMock} />,
    );
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one label element with className of search-field and htmlFor property of search', () => {
    expect(wrapper.find('label').length).toEqual(1);
    expect(wrapper.find('label').hasClass('search-field')).toBeTruthy();
    expect(wrapper.find('label').prop('htmlFor')).toEqual('search');
  });

  it('should render one input element of type `search`, className `search-input`, name `search`, and placeholder property `Search`', () => {
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('input').hasClass('search-input')).toBeTruthy();
    expect(wrapper.find('input').prop('type')).toEqual('search');
    expect(wrapper.find('input').prop('name')).toEqual('search');
    expect(wrapper.find('input').prop('placeholder')).toEqual('Search');
  });

  it('should call onSearchTermChange prop passing the searchTerm', () => {
    const searchTerm = 'the national';
    wrapper.find('input').simulate('change', searchTerm);
    expect(onSearchTermChangeMock).toBeCalledWith('the national');
  });
});
