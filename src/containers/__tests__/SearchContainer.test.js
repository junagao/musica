import React from 'react';
import { shallow } from 'enzyme';

import SearchContainer from 'containers/SearchContainer';
import SearchInput from 'components/SearchInput';
import Loading from 'components/Loading';
import SearchButton from 'components/SearchButton';

describe('SearchContainer', () => {
  let wrapper;
  const onSearchMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<SearchContainer onSearch={onSearchMock} loading />);
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a form element with className `search-form`', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should render one SearchInput component', () => {
    expect(wrapper.find(SearchInput).length).toEqual(1);
  });

  it('should render one Loading component if this.props.loading is true', () => {
    expect(wrapper.find(Loading).length).toEqual(1);
  });

  it('should render one Loading component if this.props.loading is false', () => {
    wrapper.setProps({ loading: false });
    expect(wrapper.find(SearchButton).length).toEqual(1);
  });
});
