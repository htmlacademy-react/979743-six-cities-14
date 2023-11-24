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

function sortLowToHigh(offers: OfferInfoProps[]): OfferInfoProps[] {
  return offers.slice().sort((a, b) => a.price - b.price);
}

function sortHighToLow(offers: OfferInfoProps[]): OfferInfoProps[] {
  return offers.slice().sort((a, b) => b.price - a.price);
}

function sortByRating(offers: OfferInfoProps[]): OfferInfoProps[] {
  return offers.slice().sort((a, b) => b.rating - a.rating);
}

function sortOffers(offers: OfferInfoProps[], sortingType: string): OfferInfoProps[] { // offers - это офферы в первоначальном порядке
  // надо сделать, чтобы sortingType принимала значения только из массива
  switch (sortingType) {
    case 'Price: low to high':
      return sortLowToHigh(offers);
    case 'Price: high to low':
      return sortHighToLow(offers);
    case 'Top rated first':
      return sortByRating(offers);
    default: //  = Popular
      return offers; // первоначальный порядок
  }
}

export {selectOffersByCity, selecFavorites, getCityLocation, findOfferByID, sortOffers};
