import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {GetService} from '../../services/GetService';
const api_endpoint = 'http://192.168.1.31:3000/';

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
