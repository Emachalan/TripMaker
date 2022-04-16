import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {GetService} from '../../services/GetService';
import { PostService } from '../../services/PostService';
const api_endpoint = 'http://192.168.101.6:3000/';

export const searchPeople = createAsyncThunk(
  'people/searchPeople',
  async ({params, endpoint}, {rejectWithValue, dispatch}) => {
    const {success, data, message} = await GetService(
      api_endpoint + endpoint,
      params,
    );
    if (success) {
      return {data, message, success};
    } else {
      return rejectWithValue(message);
    }
  },
);

export const makeTripNotifications = createAsyncThunk(
  'people/makeTripNotifications',
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

