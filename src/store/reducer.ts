import {createReducer} from '@reduxjs/toolkit';
import { cityChange, sortingChange, loadedOffers, favoritesOffers } from './action';
import { DEFAULT_CITY, DEFAULT_SORTING_TYPE } from '../const';
import { OfferInfoProps } from '../pages/offer/offer';
import { selecFavorites, selectOffersByCity, sortOffers } from '../util';

type TInitialState = {
  city: string;
  offers: OfferInfoProps[];
  byCityOffers: OfferInfoProps[];
  favoritesOffers: OfferInfoProps[];
  sorting: string;
  sortedOffers: OfferInfoProps[];
};
const initialState: TInitialState = {
  city: DEFAULT_CITY,
  // список офферов для всех городов - так получаем с сервера
  offers: [],
  byCityOffers: [],
  favoritesOffers: [],
  sorting: DEFAULT_SORTING_TYPE,
  sortedOffers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadedOffers, (state, action) => {
      console.log(action.payload);
      state.offers = action.payload;
      state.byCityOffers = selectOffersByCity(action.payload, DEFAULT_CITY);
      state.sortedOffers = state.byCityOffers;
    })
    .addCase(favoritesOffers, (state, action) => {
      state.favoritesOffers = selecFavorites(action.payload); // на входе - ВСЕ офферы, dispatch в index.tsx
    })
    .addCase(cityChange, (state, action) => {
      state.city = action.payload; // на входе - выбранный город
      state.byCityOffers = selectOffersByCity(state.offers, action.payload);
      state.sortedOffers = state.byCityOffers;
    })
    .addCase(sortingChange, (state, action) => {
      state.sorting = action.payload; // на входе тип сортировки
      state.sortedOffers = sortOffers(state.byCityOffers, action.payload);
    });
});

export {reducer};
