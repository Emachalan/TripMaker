import {createReducer} from '@reduxjs/toolkit';

import {createAccount, createNotification} from './actions';

export const profileDefaultState = {
  isLoading: false,
  profileData: null,
  notifyData: null,
  isError: false,
  errorMessage: null,
};

export default createReducer(profileDefaultState, {
  [createAccount.pending]: state => {
    state.isLoading = true;
  },
  [createAccount.fulfilled]: (state, {payload}) => {
    state.isLoading = false;
    state.profileData = payload?.data?.data;
  },
  [createAccount.rejected]: (state, {payload}) => {
    state.isLoading = false;
    state.profileData = null;
    state.errorMessage = payload;
  },
  [createNotification.pending]: state => {
    state.isLoading = true;
  },
  [createNotification.fulfilled]: (state, {payload}) => {
    state.isLoading = false;
    state.notifyData = payload?.data?.data;
  },
  [createNotification.rejected]: (state, {payload}) => {
    state.isLoading = false;
    state.notifyData = null;
    state.errorMessage = payload;
  },
});
