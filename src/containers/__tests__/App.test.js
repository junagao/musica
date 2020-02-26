import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import store from 'store';
import { App } from 'containers/App';
import Header from 'components/Header';
import SearchContainer from 'containers/SearchContainer';
import AlbumsList from 'components/AlbumsList';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    const mockAlbums = [
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
    wrapper = mount(
      <Provider store={store}>
        <App data={mockAlbums} loading={false} error="" />
      </Provider>,
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders one div with className `container`', () => {
    expect(
      wrapper
        .find('div')
        .at(0)
        .hasClass('container'),
    ).toBeTruthy();
  });

  it('shows a Header', () => {
    expect(wrapper.find(Header).length).toEqual(1);
  });

  it('shows a SearchContainer', () => {
    expect(wrapper.find(SearchContainer).length).toEqual(1);
  });

  it('shows a ErrorMessage if theres an error', () => {
    wrapper.setProps({ error: 'ERROR' });
    expect(wrapper.find(SearchContainer).length).toEqual(1);
  });

  it('shows a AlbumsList if theres data', () => {
    expect(wrapper.find(AlbumsList).length).toEqual(1);
  });
});
