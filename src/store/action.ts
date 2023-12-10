import { createAction } from '@reduxjs/toolkit';
import { TOffers } from '../types/offers';
import { TUserData } from '../types/user-data';

export const cityChange = createAction<string>('main/cityChange');

export const filteredOffersByCity = createAction<TOffers>('offersByCity');

export const sortingChange = createAction<string>('main/sortingChange');

export const userInfo = createAction<TUserData>('user/info');

export const serverError = createAction<string | null>('serverError'); // ошибка в ответ сервера
