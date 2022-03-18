import {createReducer} from '@reduxjs/toolkit';

import {searchPeople} from './actions';

export const profileDefaultState = {
  isLoading: false,
  searchedPeoples: null,
  isError: false,
  errorMessage: null,
};

export default createReducer(profileDefaultState, {
  [searchPeople.pending]: state => {
    state.isLoading = true;
  },
  [searchPeople.fulfilled]: (state, {payload}) => {
    state.isLoading = false;
    state.searchedPeoples = payload?.data?.data;
  },
  [searchPeople.rejected]: (state, {payload}) => {
    state.isLoading = false;
    state.searchedPeoples = null;
    state.errorMessage = payload;
  },
});
