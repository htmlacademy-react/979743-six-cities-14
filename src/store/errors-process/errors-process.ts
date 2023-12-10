import { createSlice } from '@reduxjs/toolkit';
import { TErrors } from '../../types/state';
import { NameSpace } from '../../const';
import { serverError } from '../action';

const initialState: TErrors = {
  serverError: null, // текст ошибки
};

export const errorProcess = createSlice({
  name: NameSpace.Error,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(serverError, (state, action) => {
        state.serverError = action.payload;
      });
  }
});
