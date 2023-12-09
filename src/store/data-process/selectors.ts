import { NameSpace } from '../../const';
import { TOfferInfo } from '../../types/offer-info';
import { TOffers } from '../../types/offers';
import { TReviews } from '../../types/reviews';
import { State } from '../../types/state';

export const getOffers = (state: State): TOffers => state[NameSpace.Data].offers;
export const getIsOffersLoading = (state: State): boolean => state[NameSpace.Data].isOffersLoading;
export const getOfferInfo = (state: State): TOfferInfo => state[NameSpace.Data].offerInfo;
export const getReviewsList = (state: State): TReviews => state[NameSpace.Data].reviewsList;
export const getIsReviewListLoading = (state: State): boolean => state[NameSpace.Data].isReviewListLoading;
