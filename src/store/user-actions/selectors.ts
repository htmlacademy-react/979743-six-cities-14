import { NameSpace, TSortType } from '../../const';
import { TOffers } from '../../types/offers';
import { State } from '../../types/state';

export const getCity = (state: State): string => state[NameSpace.UserAction].city;
export const getSorting = (state: State): TSortType => state[NameSpace.UserAction].sorting;
export const getOffersByCity = (state: State): TOffers => state[NameSpace.UserAction].offersByCity;
