import { createAsyncThunk } from '@reduxjs/toolkit';
import { State, AppDispatch } from '../types/state';
import {AxiosInstance} from 'axios';
import { loadedOffers, offerInfoLoading, offersLoading, requireAuthorization, userInfo } from './action';
import {APIRoute, AuthorizationStatus} from '../const';
import { TOffers } from '../types/offers';
import { TOfferInfo } from '../types/offer-info';
import { TUserData } from '../types/user-data';
import { TAuthData } from '../types/auth-data';
import { saveToken, dropToken } from '../services/token';

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
