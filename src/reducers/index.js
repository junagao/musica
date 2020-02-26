import { combineReducers } from 'redux';

import albums from './albums';
import page from './pagination';

export default combineReducers({
  albums,
  page,
});
