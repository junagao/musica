import React from 'react';
import { shallow } from 'enzyme';
import { FaThList } from 'react-icons/fa';

import ViewTypeButton from 'components/ViewTypeButton';

describe('ViewTypeButton', () => {
  let wrapper;
  const onChangeViewMock = jest.fn();
  const viewTypeMock = 'list';
  const iconMock = <FaThList />;

  beforeEach(() => {
    wrapper = shallow(
      <ViewTypeButton
        onChangeView={onChangeViewMock}
        viewType={viewTypeMock}
        icon={iconMock}
      />,
    );
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one button element of type `button` and className `view-btn`', () => {
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.find('button').prop('type')).toEqual('button');
    expect(wrapper.find('button').hasClass('view-btn')).toBeTruthy();
  });

  it('should render an icon `<FaThList />`', () => {
    expect(wrapper.find('button').text()).toEqual('<FaThList />');
  });

  it('should test click event on button and pass `list` to onChangeView()', () => {
    wrapper.find('button').simulate('click');
    expect(onChangeViewMock.mock.calls[0][0]).toEqual('list');
    expect(onChangeViewMock.mock.calls.length).toEqual(1);
  });
});
