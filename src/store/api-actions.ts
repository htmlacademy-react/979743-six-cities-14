import { createAsyncThunk } from '@reduxjs/toolkit';
import { State, AppDispatch } from '../types/state';
import {AxiosInstance} from 'axios';
import { loadedOffers, newReview, offerInfoLoading, offersLoading, requireAuthorization, userInfo, reviewList, reviewListLoading } from './action';
import {APIRoute, AuthorizationStatus} from '../const';
import { TOffers } from '../types/offers';
import { TOfferInfo } from '../types/offer-info';
import { TUserData } from '../types/user-data';
import { TAuthData } from '../types/auth-data';
import { saveToken, dropToken } from '../services/token';
import { TSendReview } from '../types/send-review';
import { TNewReview } from '../types/new-review';
import { TReviews } from '../types/reviews';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(offersLoading(true));
    const {data} = await api.get<TOffers>(APIRoute.Offers);
    dispatch(loadedOffers(data));
  },
);

export const fetchOfferInfoAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferInfo',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(offersLoading(true)); // начинаем загрузку
    const {data} = await api.get<TOfferInfo>(APIRoute.Offers);
    dispatch(offerInfoLoading(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<TUserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(userInfo(data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, TAuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<TUserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(userInfo(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth)); //меняем статус авториизации
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth)); //меняем статус авториизации
  },
);

export const fetchReviewListAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviewList',
  async (id, {dispatch, extra: api}) => {
    dispatch(reviewListLoading(true)); // начинаем загрузку
    const {data} = await api.get<TReviews>(`${APIRoute.Reviews}/${id}`);
    dispatch(reviewList(data));
    // dispatch(reviewListLoading(false));
  },
);

export const sendReviewAction = createAsyncThunk<void, TNewReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'send/review',
  async ({comment, rating, id}, {dispatch, extra: api}) => {
    const {data} = await api.post<TNewReview>(`${APIRoute.Reviews}/${id}`, {comment, rating});
    dispatch(newReview(data));
  },
);
