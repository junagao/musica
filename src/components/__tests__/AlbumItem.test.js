import React from 'react';
import { shallow } from 'enzyme';

import AlbumItem from 'components/AlbumItem';

describe('AlbumItem', () => {
  let wrapper;
  const artist = 'Tycho';
  const artwork =
    'https://is4-ssl.mzstatic.com/image/thumb/Music/v4/b9/76/bc/b976bc5d-2c25-d79d-4057-67bc47b4ab6d/source/200x200bb.jpg';
  const album = 'Awake';

  beforeEach(() => {
    wrapper = shallow(
      <AlbumItem artist={artist} artwork={artwork} album={album} />,
    );
  });

  it('should render correctly given the required props', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one album per li item with className of album-item', () => {
    expect(wrapper.find('li').length).toEqual(1);
    expect(wrapper.find('li').hasClass('album-item')).toEqual(true);
  });

  it('should render the album image correctly', () => {
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('img').prop('src')).toEqual(artwork);
  });

  it('should render one div with className of album-details', () => {
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('div').hasClass('album-details')).toEqual(true);
  });

  it('should render two p elements', () => {
    expect(wrapper.find('p').length).toEqual(2);
  });

  it('should render one p with className album-title', () => {
    expect(wrapper.find('p').at(0).length).toEqual(1);

    expect(
      wrapper
        .find('p')
        .at(0)
        .hasClass('album-title'),
    ).toEqual(true);
  });

  it('should render the album title correctly', () => {
    expect(
      wrapper
        .find('p')
        .at(0)
        .text(),
    ).toEqual(album);
  });

  it('should render one p with className album-artist', () => {
    expect(wrapper.find('p').at(1).length).toEqual(1);

    expect(
      wrapper
        .find('p')
        .at(1)
        .hasClass('album-artist'),
    ).toEqual(true);
  });

  it('should render the album artist correctly', () => {
    expect(
      wrapper
        .find('p')
        .at(1)
        .text(),
    ).toEqual(artist);
  });
});
