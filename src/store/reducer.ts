import {createReducer} from '@reduxjs/toolkit';
import { cityChange, sortingChange, loadedOffers, favoritesOffers, offersLoading, serverError, requireAuthorization, userInfo, offerInfoLoading } from './action';
import { DEFAULT_CITY, DEFAULT_SORTING_TYPE, AuthorizationStatus } from '../const';
import { TOffers } from '../types/offers';
import { TUserData } from '../types/user-data';
import { selecFavorites, selectOffersByCity, sortOffers } from '../util';
import { TOfferInfo } from '../types/offer-info';

type TInitialState = {
  isOffersLoading: boolean;
  city: string;
  offers: TOffers;
  offerInfo: TOfferInfo;
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
  offers: [], // список офферов для всех городов - так получаем с сервера
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
  },
  offerInfo: {
    'id': '',
    'title': '',
    'type': '',
    'price': 0,
    'city': {
      'name': '',
      'location': {
        'latitude': 0,
        'longitude': 0,
        'zoom': 0
      }
    },
    'location': {
      'latitude': 0,
      'longitude': 0,
      'zoom': 0
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 0,
    'description': '',
    'bedrooms': 0,
    'goods': [''],
    'host': {
      'name': '',
      'avatarUrl': '',
      'isPro': false
    },
    'images': [''],
    'maxAdults': 0
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
    })
    .addCase(offerInfoLoading, (state, action) => {
      state.offerInfo = action.payload;
    });
});

export {reducer};
