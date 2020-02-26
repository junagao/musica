import React from 'react';
import { shallow } from 'enzyme';

import AlbumsList from 'components/AlbumsList';
import ViewTypeButton from 'components/ViewTypeButton';
import AlbumItem from 'components/AlbumItem';
import NoAlbum from 'components/NoAlbum';

describe('AlbumList', () => {
  let wrapper;
  const albums = [
    {
      collectionId: 793928184,
      artistName: 'Tycho',
      collectionName: 'Awake',
      artworkUrl100:
        'https://is4-ssl.mzstatic.com/image/thumb/Music/v4/b9/76/bc/b976bc5d-2c25-d79d-4057-67bc47b4ab6d/source/100x100bb.jpg',
    },
    {
      collectionId: 1461523692,
      artistName: 'Tycho',
      collectionName: 'Weather',
      artworkUrl100:
        'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/a9/bf/0c/a9bf0c63-fb1d-b3ee-315f-40d829f0159c/source/100x100bb.jpg',
    },
  ];

  beforeEach(() => {
    wrapper = shallow(
      <AlbumsList albums={albums} onChangeView={jest.fn()} noResults={false} />,
    );
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render 3 div elements', () => {
    expect(wrapper.find('div').length).toEqual(3);
  });

  it('should render the first div element with className of albums-list-container', () => {
    expect(
      wrapper
        .find('div')
        .at(0)
        .hasClass('albums-list-container'),
    ).toBeTruthy();
  });

  it('should render the second div element with className of albums-list-header', () => {
    expect(
      wrapper
        .find('div')
        .at(1)
        .hasClass('albums-list-header'),
    ).toBeTruthy();
  });

  it('should render one h2 element with the value `Albums`', () => {
    expect(wrapper.find('h2').length).toEqual(1);
    expect(wrapper.find('h2').text()).toEqual('Albums');
    expect(wrapper.containsMatchingElement(<h2>Albums</h2>)).toBeTruthy();
  });

  it('should render the third div element with className of view-type-container', () => {
    expect(
      wrapper
        .find('div')
        .at(2)
        .hasClass('view-type-container'),
    ).toBeTruthy();
  });

  it('should render two view type buttons', () => {
    expect(wrapper.find(ViewTypeButton).length).toEqual(2);
  });

  it('should render a unordered list with className albums-list and grid', () => {
    expect(wrapper.find('ul').length).toEqual(1);
    expect(wrapper.find('ul').hasClass('albums-list')).toBeTruthy();
    expect(wrapper.find('ul').hasClass('grid')).toBeTruthy();
  });

  it('should render two instances of <AlbumItem />', () => {
    expect(wrapper.find(AlbumItem).length).toEqual(2);
  });

  it('should render NoAlbum if no search results is found', () => {
    wrapper.setProps({ noResults: true });
    expect(wrapper.find(NoAlbum).length).toEqual(1);
  });
});
