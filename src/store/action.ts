import { createAction } from '@reduxjs/toolkit';
import { TOffers } from '../types/offers';

export const loadedOffers = createAction<TOffers>('loadOffers');

export const loadedOfferInfo = createAction<TOffers>('loadOfferInfo');

export const favoritesOffers = createAction<TOffers>('favoritesOffers');

export const cityChange = createAction<string>('main/cityChange'); // если вызвать с аргументом, то он подставится в поле payload.

export const offersListChange = createAction('main/offersListChange'); // нужен ли??

export const sortingChange = createAction<string>('main/sortingChange');
