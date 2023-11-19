import {createReducer} from '@reduxjs/toolkit';
import { cityChange } from './action';
import { DEFAULT_CITY } from '../const';

const initialState = {
  city: DEFAULT_CITY,
  // список офферов для всех городов - так получаем с сервера
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.city = action.payload;
      //выборка офферов по городу тоже здесь,в этом же действии? делаем выборку и сохраняем?
      console.log(state.city);

    });
});

export {reducer};

