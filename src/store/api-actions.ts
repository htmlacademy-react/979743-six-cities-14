import { createAsyncThunk } from '@reduxjs/toolkit';
import { State, AppDispatch } from '../types/state';
import {AxiosInstance} from 'axios';
import { loadedOffers, offersLoading, serverError, requireAuthorization, userInfo } from './action';
import {APIRoute, TIMEOUT_SHOW_ERROR, AuthorizationStatus} from '../const';
import { TOffers } from '../types/offers';
import { TUserData } from '../types/user-data';
import { TAuthData } from '../types/auth-data';
import { saveToken, dropToken } from '../services/token';
import { store } from '.';

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

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));

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
    console.log('успешно авторизовались');
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

export const clearErrorAction = createAsyncThunk(
  'clearServerError',
  () => {
    setTimeout(
      () => store.dispatch(serverError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
