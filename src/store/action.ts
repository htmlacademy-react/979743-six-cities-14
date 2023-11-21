import { createAction } from '@reduxjs/toolkit';
import { OfferInfoProps } from '../pages/offer/offer';

export const loadedOffers = createAction<OfferInfoProps[]>('loadOffers');

export const favoritesOffers = createAction<OfferInfoProps[]>('favoritesOffers');

export const cityChange = createAction<string>('main/cityChange'); // если вызвать с аргументом, то он подставится в поле payload.

export const offersListChange = createAction('main/offersListChange'); // нужен ли??

export const sortingChange = createAction<string>('main/sortingChange');
