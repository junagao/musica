import React from 'react';
import { shallow } from 'enzyme';

import Header from 'components/Header';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one header element', () => {
    expect(wrapper.find('header').length).toEqual(1);
  });

  it('should render one h1 element with the header title of `musica`', () => {
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('h1').text()).toEqual('musica');
  });

  it('should have a link to /', () => {
    expect(wrapper.find('a').prop('href')).toEqual('/');
  });
});
