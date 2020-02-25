import React from 'react';
import { shallow } from 'enzyme';

import ErrorMessage from 'components/ErrorMessage';

describe('ErrorMessage', () => {
  let wrapper;
  const error = 'ERROR';

  beforeEach(() => {
    wrapper = shallow(<ErrorMessage error={error} />);
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one div element with className of error-message', () => {
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('div').hasClass('error-message')).toBeTruthy();
  });

  it('should render one p element with the error message', () => {
    expect(wrapper.find('p').at(0).length).toEqual(1);
    expect(
      wrapper
        .find('p')
        .at(0)
        .text(),
    ).toEqual(`The following unexpected error occurred: ${error}`);
  });
});
