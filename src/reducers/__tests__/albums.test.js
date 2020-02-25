import albumsReducer from 'reducers/albums';
import {
  GET_ALBUMS_REQUEST,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_ERROR,
} from 'actions/types';

describe('albums reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      data: [],
      loading: false,
      error: '',
    };
  });

  it('should return the initial state', () => {
    expect(albumsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_ALBUMS_REQUEST', () => {
    const action = {
      type: GET_ALBUMS_REQUEST,
    };

    const expectedState = {
      data: [],
      loading: true,
      error: '',
    };

    expect(albumsReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_ALBUMS_SUCCESS', () => {
    const action = {
      type: GET_ALBUMS_SUCCESS,
      albums: [
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
      ],
    };

    const expectedState = {
      data: [
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
      ],
      loading: false,
      error: '',
    };

    expect(albumsReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle GET_ALBUMS_ERROR', () => {
    const action = {
      type: GET_ALBUMS_ERROR,
      error: 'Error Fetching Albums!',
    };

    const expectedState = {
      data: [],
      loading: false,
      error: 'Error Fetching Albums!',
    };

    expect(albumsReducer(initialState, action)).toEqual(expectedState);
  });
});
