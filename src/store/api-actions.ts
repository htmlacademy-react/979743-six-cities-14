import { createAsyncThunk } from '@reduxjs/toolkit';
import { State, AppDispatch } from '../types/state';
import {AxiosInstance} from 'axios';
import { loadedOffers, loadedOfferInfo } from './action';
import {APIRoute} from '../const';
import { TOffers } from '../types/offers';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
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
    const {data} = await api.get<TOffers>(`${APIRoute.Offers}`);
    dispatch(loadedOfferInfo(data));
  },
);

