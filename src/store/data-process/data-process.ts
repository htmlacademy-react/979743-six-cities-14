import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { TDataProcess } from '../../types/state';
import { changeFavoritesAction, fetchFavoritesAction, fetchOfferInfoAction, fetchOffersAction, fetchReviewListAction, sendReviewAction } from '../api-actions';

const initialState: TDataProcess = {
  offers: [], // список офферов для всех городов - так получаем с сервера
  isOffersLoading: true,
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
  favorites: [],
  isFavoritesLoading: true,
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
      })
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isFavoritesLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoritesLoading = false;
      })
      .addCase(changeFavoritesAction.fulfilled, (state, action) => {
        state.offers = state.offers.map((offer) => ({
          ...offer,
          isFavorite: offer.id === action.payload.id ? action.payload.isFavorite : offer.isFavorite,
        }
        ));
      });
  }
});
