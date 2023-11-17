import {createReducer} from '@reduxjs/toolkit';
import { cityChange } from './action';
import { DEFAULT_CITY } from '../const';

const initialState = {
  city: DEFAULT_CITY,
  // список офферов для Парижа
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state) => {
      console.log(state.city); // как сюда положить новое значение? payload?
      //выборка офферов по городу тоже здесь,в этом же действии? делаем выборку и сохраняем?
    });
});

export {reducer};

