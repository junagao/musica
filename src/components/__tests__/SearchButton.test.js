import React from 'react';
import { shallow } from 'enzyme';
import { IoIosSearch } from 'react-icons/io';

import SearchButton from 'components/SearchButton';

describe('SearchButton', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchButton />);
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one button element of type `submit` and className `search-button`', () => {
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.find('button').prop('type')).toEqual('submit');
    expect(wrapper.find('button').hasClass('search-button')).toBeTruthy();
  });

  it('should render IoIosSearch icon', () => {
    expect(wrapper.find('button').text()).toEqual('<IoIosSearch />');
    expect(
      wrapper.containsMatchingElement(
        <button type="submit" className="search-button">
          <IoIosSearch />
        </button>,
      ),
    ).toBeTruthy();
  });
});
