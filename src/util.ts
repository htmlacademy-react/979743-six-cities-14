//ф-я для выборки из массива оффером по городу
import { OfferInfoProps } from './pages/offer/offer';

function selectOffersByCity (allOffers: OfferInfoProps[], city: string): OfferInfoProps[] {

  const selectedoffers = allOffers.filter((offer) => offer.city.name === city);
  return selectedoffers;
}

function selecFavorites(allOffers: OfferInfoProps[]): OfferInfoProps[] {
  const selectedOffers = allOffers.filter((offer) => offer.isFavorite);
  return selectedOffers;
}

export {selectOffersByCity, selecFavorites};
