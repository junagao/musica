import {
  getAlbumsRequest,
  getAlbumsSuccess,
  getAlbumsError,
} from 'actions/albums';
import {
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_ERROR,
} from 'actions/types';

describe('getAlbumsRequest', () => {
  it('has the correct type', () => {
    const action = getAlbumsRequest();

    expect(action.type).toEqual(GET_ALBUMS_REQUEST);
  });

  it('had the correct payload', () => {
    const action = getAlbumsRequest();

    expect(action.payload).toEqual();
  });
});

describe('getAlbumsSuccess', () => {
  it('has the correct type', () => {
    const action = getAlbumsSuccess();

    expect(action.type).toEqual(GET_ALBUMS_SUCCESS);
  });

  it('had the correct payload', () => {
    const data = [
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
    const action = getAlbumsSuccess(data);

    expect(action.albums).toEqual(data);
  });
});

describe('getAlbumsError', () => {
  it('has the correct type', () => {
    const action = getAlbumsError();

    expect(action.type).toEqual(GET_ALBUMS_ERROR);
  });

  it('has the correct payload', () => {
    const action = getAlbumsError('An unexpected error ocurred!');

    expect(action.error).toEqual('An unexpected error ocurred!');
  });
});
