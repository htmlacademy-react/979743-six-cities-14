import { createAction } from '@reduxjs/toolkit';
import { OfferInfoProps } from '../pages/offer/offer';

export const loadOffers = createAction<OfferInfoProps[]>('loadOffers');

export const cityChange = createAction<string>('main/cityChange'); // если вызвать с аргументом, то он подставится в поле payload.

export const offersListChange = createAction('main/offersListChange'); // нужен ли??

export const sortingChange = createAction<string>('main/sortingChange');
