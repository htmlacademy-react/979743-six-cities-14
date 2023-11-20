import {createReducer} from '@reduxjs/toolkit';
import { cityChange } from './action';
import { DEFAULT_CITY } from '../const';
import { OFFERS } from '../mocks/offers'; // ВРЕМЕННО!!!

const initialState = {
  city: DEFAULT_CITY,
  // список офферов для всех городов - так получаем с сервера
  offers: OFFERS, // пока так, потом офферы в store будет скаладывать кто-то другой
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, action) => {
      state.city = action.payload;
      // выборку офферов делает компонент MainPages
      // или правильнее это сделать здесь?
    });
});

export {reducer};

