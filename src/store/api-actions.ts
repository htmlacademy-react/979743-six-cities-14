import { createAsyncThunk } from '@reduxjs/toolkit';
import { State, AppDispatch } from '../types/state';
import {AxiosInstance} from 'axios';
import { loadedOffers } from './action';
import {APIRoute} from '../const';
import { OfferInfoProps } from '../pages/offer/offer';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuestions',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferInfoProps[]>(APIRoute.Offers);
    dispatch(loadedOffers(data));
  },
);
