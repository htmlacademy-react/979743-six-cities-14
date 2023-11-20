import {createReducer} from '@reduxjs/toolkit';
import { cityChange, sortingChange } from './action';
import { DEFAULT_CITY, DEFAULT_SORTING_TYPE } from '../const';
import { OFFERS } from '../mocks/offers'; // ВРЕМЕННО!!!

const initialState = {
  city: DEFAULT_CITY,
  // список офферов для всех городов - так получаем с сервера
  offers: OFFERS, // пока так, потом офферы в store будет складывать кто-то другой
  sorting: DEFAULT_SORTING_TYPE,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.city = action.payload;
      // выборку офферов делает компонент MainPages
      // или правильнее это сделать здесь?
    })
    .addCase(sortingChange, (state, action) => {
      state.sorting = action.payload;
    });
});

export {reducer};
