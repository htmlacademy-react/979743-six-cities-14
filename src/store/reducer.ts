import {createReducer} from '@reduxjs/toolkit';
import { cityChange, sortingChange, loadedOffers, favoritesOffers, offersLoading, serverError, requireAuthorization, userInfo } from './action';
import { DEFAULT_CITY, DEFAULT_SORTING_TYPE, AuthorizationStatus } from '../const';
import { TOffers } from '../types/offers';
import { TUserData } from '../types/user-data';
import { selecFavorites, selectOffersByCity, sortOffers } from '../util';

type TInitialState = {
  isOffersLoading: boolean;
  city: string;
  offers: TOffers;
  byCityOffers: TOffers;
  favoritesOffers: TOffers;
  sorting: string;
  sortedOffers: TOffers;
  serverError: string | null; // хранит текст сообщения об ошибке для пользователя
  authorizationStatus: AuthorizationStatus;
  userInfo: TUserData;

};

const initialState: TInitialState = {
  isOffersLoading: true,
  city: DEFAULT_CITY,
  // список офферов для всех городов - так получаем с сервера
  offers: [],
  byCityOffers: [],
  favoritesOffers: [],
  sorting: DEFAULT_SORTING_TYPE,
  sortedOffers: [],
  serverError: null, // текст ошибки
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: {
    name: '',
    avatarUrl: '',
    email: '',
    isPro: false,
    token: '',
  }
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadedOffers, (state, action) => {
      state.offers = action.payload;
      state.byCityOffers = selectOffersByCity(action.payload, DEFAULT_CITY);
      state.sortedOffers = state.byCityOffers;
      state.isOffersLoading = false; // завершили загрузку
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
    })
    .addCase(offersLoading, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(serverError, (state, action) => {
      state.serverError = action.payload; // хранит текст ошибки сервера
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(userInfo, (state, action) => {
      state.userInfo = action.payload;
    });
});

export {reducer};
