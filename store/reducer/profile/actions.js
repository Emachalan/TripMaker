import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {PostService} from '../../services/PostService';

const api_endpoint = 'http://192.168.1.31:3000/';

export const createAccount = createAsyncThunk(
  'profile/createAccount',
  async ({body, endpoint}, {rejectWithValue, dispatch}) => {
    const {success, data, message} = await PostService(
      api_endpoint + endpoint,
      body,
    );
    if (success) {
      return {data, message, success};
    } else {
      return rejectWithValue(message);
    }
  },
);

export const createNotification = createAsyncThunk(
  'profile/createNotification',
  async ({body, endpoint}, {rejectWithValue, dispatch}) => {
    const {success, data, message} = await PostService(
      api_endpoint + endpoint,
      body,
    );
    if (success) {
      return {data, message, success};
    } else {
      return rejectWithValue(message);
    }
  },
);