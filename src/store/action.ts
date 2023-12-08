import { createAction } from '@reduxjs/toolkit';
import { TOffers } from '../types/offers';
// import { AuthorizationStatus } from '../const';
import { TUserData } from '../types/user-data';
import { TOfferInfo } from '../types/offer-info';
import { TNewReview } from '../types/new-review';
import { TReviews } from '../types/reviews';

export const offersLoading = createAction<boolean>('offersLoading'); // процесс загрузки

export const serverError = createAction<string | null>('serverError'); // ошибка в ответ сервера

export const loadedOffers = createAction<TOffers>('loadOffers'); // загружаем массив офферов, при старте

export const favoritesOffers = createAction<TOffers>('favoritesOffers');

export const cityChange = createAction<string>('main/cityChange');

export const sortingChange = createAction<string>('main/sortingChange');

// export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const userInfo = createAction<TUserData>('user/info');

export const offerInfoLoading = createAction<TOfferInfo>('offer/info');

export const reviewList = createAction<TReviews>('offer/reviewList');

export const reviewListLoading = createAction<boolean>('offer/reviewListLoading');

export const newReview = createAction<TNewReview>('offer/newReview');
