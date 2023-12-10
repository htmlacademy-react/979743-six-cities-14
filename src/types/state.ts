import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { TOfferInfo } from './offer-info';
import { TOffers } from './offers';
import { TReviews } from './reviews';
import { TUserData } from './user-data';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type TAuthProcess = {
  authorizationStatus: AuthorizationStatus;
  userInfo: TUserData;
};
export type TDataProcess = {
  offers: TOffers;
  isOffersLoading: boolean;
  offerInfo: TOfferInfo;
  reviewsList: TReviews;
  isReviewListLoading: boolean;
  offersNearBy: TOffers;
  isOffersNearByLoading: boolean;
  favorites: TOffers;
  isFavoritesLoading: boolean;
}

export type TUserActions = { // взаимодействие с пользователем
  city: string;
  sorting: string;
  offersByCity: TOffers; // хранит отфильтрованные по городу офферы
}

export type TErrors = {
  serverError: string | null; // хранит текст сообщения об ошибке для пользователя
}
