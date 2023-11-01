//ф-я для выборки из массива оффером по городу
import { OfferInfoProps } from './pages/offer/offer';
// import { City } from './const';

function selectOffersByCity (allOffers: OfferInfoProps[], city: string): OfferInfoProps[] {

  const selectedoffers = allOffers.filter((offer) => offer.city.name === city);
  return selectedoffers;
}

function selecFavorites(allOffers: OfferInfoProps[]): OfferInfoProps[] {
  const selectedOffers = allOffers.filter((offer) => offer.isFavorite);
  return selectedOffers;
}

// function selectOffersByCities () {}

export {selectOffersByCity, selecFavorites};
