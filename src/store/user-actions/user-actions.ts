import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_CITY, DEFAULT_SORTING_TYPE, NameSpace } from '../../const';
import { TUserActions } from '../../types/state';
import { cityChange, filteredOffersByCity, sortingChange } from '../action';

const initialState: TUserActions = {
  city: DEFAULT_CITY,
  sorting: DEFAULT_SORTING_TYPE,
  offersByCity: [],
};

export const userActions = createSlice({
  name: NameSpace.UserAction,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(cityChange, (state, action) => {
        state.city = action.payload;
        // выборка по городу - в MainPage
      })
      .addCase(sortingChange, (state, action) => {
        state.sorting = action.payload;
        // сортировка – в MainWithOffers
      })
      .addCase(filteredOffersByCity, (state, action) => {
        state.offersByCity = action.payload; // хранит отфильтрованные по городу офферы, выборка - в MainPage
      });
  }
});
