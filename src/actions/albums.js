import api from '../api';
import GET_ALBUMS from './types';

export default (term = 'tycho', limit = 20) => async (dispatch) => {
  const response = await api.get(`?term=${term}&limit=${limit}`);
  dispatch({
    type: GET_ALBUMS,
    payload: response.data.results,
  });
};
