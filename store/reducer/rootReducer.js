import {combineReducers} from 'redux';

import profile from './profile/reducer';
import peoples from './people/reducer';

export const appReducer = combineReducers({
  profile,
  peoples,
});
