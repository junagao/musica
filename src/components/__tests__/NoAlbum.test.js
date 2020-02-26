import React from 'react';
import { shallow } from 'enzyme';

import NoAlbum from 'components/NoAlbum';

describe('NoAlbum', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NoAlbum />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one div element with className of no-album', () => {
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('div').hasClass('no-album')).toEqual(true);
  });

  it('should render the error message', () => {
    expect(wrapper.find('div').text()).toEqual('Sorry, no album found.');
  });
});
