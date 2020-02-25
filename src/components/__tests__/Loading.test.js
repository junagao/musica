import React from 'react';
import { shallow } from 'enzyme';

import Loading from 'components/Loading';

describe('Loading', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Loading />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one div element with className of spinner-container and another with spinner', () => {
    expect(wrapper.find('div').length).toEqual(2);
    expect(
      wrapper
        .find('div')
        .at(0)
        .hasClass('spinner-container'),
    ).toEqual(true);
    expect(
      wrapper
        .find('div')
        .at(1)
        .hasClass('spinner'),
    ).toEqual(true);
  });

  it('should render three span elements with className of spinner-inner-1, spinner-inner-2, spinner-inner-3 respectively', () => {
    expect(wrapper.find('span').length).toEqual(3);
    expect(
      wrapper
        .find('span')
        .at(0)
        .hasClass('spinner-inner-1'),
    ).toEqual(true);
    expect(
      wrapper
        .find('span')
        .at(1)
        .hasClass('spinner-inner-2'),
    ).toEqual(true);
    expect(
      wrapper
        .find('span')
        .at(2)
        .hasClass('spinner-inner-3'),
    ).toEqual(true);
  });
});
