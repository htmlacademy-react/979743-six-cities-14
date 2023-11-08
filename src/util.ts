//ф-я для выборки из массива оффером по городу
import { OfferInfoProps } from './pages/offer/offer';
import { CityLocationType } from './types/cities';
import { City } from './const';

function selectOffersByCity (allOffers: OfferInfoProps[], city: string): OfferInfoProps[] {
  const selectedOffers = allOffers.filter((offer) => offer.city.name === city);
  return selectedOffers;
}

function selectOneOfferByCity (allOffers: OfferInfoProps[], city: string): OfferInfoProps {
  const selectedFirstOffer = allOffers.find((offer) => offer.city.name === city);
  return selectedFirstOffer;
}

function selecFavorites(allOffers: OfferInfoProps[]): OfferInfoProps[] {
  const selectedOffers = allOffers.filter((offer) => offer.isFavorite);
  return selectedOffers;
}

function getCitiesLocation (allOffers: OfferInfoProps[]): CityLocationType[] { // возможно, избыточна
  const cities = Object.keys(City);
  const citiesLocationInfo = cities
    .map((city) => selectOneOfferByCity(allOffers, city)) // => offer | undefined
    .filter((offer) => offer)
    .map((offer) => ({
      name: offer.city.name,
      zoom: offer.city.location.zoom,
      lat: offer.city.location.latitude,
      lng: offer.city.location.longitude,
    }));

  return citiesLocationInfo;
}

function getCityLocation (allOffers: OfferInfoProps[], city: string): CityLocationType | undefined {
  const cityLocationInfo = allOffers.find((offer) => offer.city.name === city);
  if (cityLocationInfo) {
    return ({
      name: cityLocationInfo.city.name,
      zoom: cityLocationInfo.city.location.zoom,
      lat: cityLocationInfo.city.location.latitude,
      lng: cityLocationInfo.city.location.longitude,
    });
  }
}

export {selectOffersByCity, selecFavorites, getCitiesLocation, getCityLocation};
