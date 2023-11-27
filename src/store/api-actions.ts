import { createAsyncThunk } from '@reduxjs/toolkit';
import { State, AppDispatch } from '../types/state';
import {AxiosInstance} from 'axios';
import { loadedOffers, offersLoading, serverError } from './action';
import {APIRoute, TIMEOUT_SHOW_ERROR} from '../const';
import { TOffers } from '../types/offers';
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
    // const {data} = await api.get<TOffers>('https//dfdf.com');
    dispatch(loadedOffers(data));
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

// export const fetchOfferInfoAction = createAsyncThunk<void, undefined, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/fetchOfferInfo',
//   async (_arg, {dispatch, extra: api}) => {
//     const {data} = await api.get<TOffers>(`${APIRoute.Offers}/5c98ba73-ed22-494d-bbca-ceada152879b`);
//     dispatch(loadedOfferInfo(data));
//   },
// );

