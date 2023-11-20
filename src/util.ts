import { OfferInfoProps } from './pages/offer/offer';
import { CityLocationType } from './types/cities';

function selectOffersByCity (allOffers: OfferInfoProps[], city: string): OfferInfoProps[] {
  const selectedOffers = allOffers.filter((offer) => offer.city.name === city);
  return selectedOffers;
}

function findOfferByID (allOffers: OfferInfoProps[], id: number): OfferInfoProps {
  const selectedOffer = allOffers.find((offer) => offer.id === id);
  if (selectedOffer) {
    return selectedOffer;
  } else {
    return allOffers[0]; // !!! не знаю, как еще undefind обойти
  }
}

function selecFavorites(allOffers: OfferInfoProps[]): OfferInfoProps[] {
  const selectedOffers = allOffers.filter((offer) => offer.isFavorite); // возвращает новый массив
  return selectedOffers;
}

function getCityLocation (allOffers: OfferInfoProps[], city: string): CityLocationType {
  // вызывается в MainWithOffers при старте и при изменении города
  const cityLocationInfo = allOffers.find((offer) => offer.city.name === city);
  if (cityLocationInfo) {
    return ({
      name: cityLocationInfo.city.name,
      zoom: cityLocationInfo.city.location.zoom,
      lat: cityLocationInfo.city.location.latitude,
      lng: cityLocationInfo.city.location.longitude,
    });
  } else {
    return ({
      name: 'Москва', // смешно
      zoom: 8,
      lat: 55.558741,
      lng: 37.378847,
    });
  }
}

export {selectOffersByCity, selecFavorites, getCityLocation, findOfferByID};
