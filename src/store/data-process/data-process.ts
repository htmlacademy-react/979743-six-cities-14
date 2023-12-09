import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_CITY, NameSpace } from '../../const';
import { TDataProcess } from '../../types/state';
import { fetchOfferInfoAction, fetchOffersAction, fetchReviewListAction, sendReviewAction } from '../api-actions';
import { selectOffersByCity } from '../../util';

const initialState: TDataProcess = {
  offers: [], // список офферов для всех городов - так получаем с сервера
  isOffersLoading: true,
  byCityOffers: [], // УБРАТЬ
  sortedOffers: [], // УБРАТЬ
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
  },
  reviewsList: [],
  isReviewListLoading: true,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.byCityOffers = selectOffersByCity(action.payload, DEFAULT_CITY);
        state.sortedOffers = selectOffersByCity(action.payload, DEFAULT_CITY); // TODO
        state.isOffersLoading = false;
      })
      .addCase(fetchOfferInfoAction.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOfferInfoAction.fulfilled, (state, action) => {
        state.offerInfo = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchReviewListAction.pending, (state) => {
        state.isReviewListLoading = true;
      })
      .addCase(fetchReviewListAction.fulfilled, (state, action) => {
        state.reviewsList = action.payload;
        state.isReviewListLoading = false;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.reviewsList = [...state.reviewsList, action.payload];
        state.isReviewListLoading = false;
      });
  }
});
