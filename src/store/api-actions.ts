import { createAsyncThunk } from '@reduxjs/toolkit';
import { State, AppDispatch } from '../types/state';
import {AxiosInstance} from 'axios';
import {APIRoute} from '../const';
import { TOffers } from '../types/offers';
import { TOfferInfo } from '../types/offer-info';
import { TUserData } from '../types/user-data';
import { TAuthData } from '../types/auth-data';
import { saveToken, dropToken } from '../services/token';
import { TNewReview } from '../types/new-review';
import { TReviews } from '../types/reviews';

export const fetchOffersAction = createAsyncThunk<TOffers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TOffers>(APIRoute.Offers);
    return data;
  },
);

export const fetchOfferInfoAction = createAsyncThunk<TOfferInfo, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferInfo',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TOfferInfo>(APIRoute.Offers);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<TUserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TUserData>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<TUserData, TAuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<TUserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchReviewListAction = createAsyncThunk<TReviews, string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviewList',
  async (id, {extra: api}) => {
    const {data} = await api.get<TReviews>(`${APIRoute.Reviews}/${id}`);
    return data;
  },
);

export const sendReviewAction = createAsyncThunk<TNewReview, TNewReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'send/review',
  async ({comment, rating, id}, {extra: api}) => {
    const {data} = await api.post<TNewReview>(`${APIRoute.Reviews}/${id}`, {comment, rating});
    return data;
  },
);

export const fetchFavoritesAction = createAsyncThunk<TOffers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TOffers>(APIRoute.Favorites);
    return data;
  },
);
