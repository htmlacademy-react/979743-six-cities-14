import dayjs from 'dayjs';
import { MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH, MIN_RATING, MAX_RATING, SortingType } from './const';
import { TOffers, TOffer } from './types/offers';
import { CityLocationType } from './types/cities';
import { TReviews } from './types/reviews';

function selectOffersByCity (allOffers: TOffers, city: string): TOffers {
  const selectedOffers = allOffers.filter((offer) => offer.city.name === city);
  return selectedOffers;
}

function findOfferByID (allOffers: TOffers, id: string | undefined): TOffer {
  const selectedOffer = allOffers.find((offer) => offer.id === id);
  if (selectedOffer) {
    return selectedOffer;
  } else {
    return allOffers[0]; // TODO как undefind обойти???
  }
}

function selectFavorites(allOffers: TOffers): TOffers {
  const selectedOffers = allOffers.filter((offer) => offer.isFavorite); // возвращает новый массив
  return selectedOffers;
}

function getCityLocation (allOffers: TOffers, city: string | undefined): CityLocationType {
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
      name: 'Москва', // смешно //TODO
      zoom: 8,
      lat: 55.558741,
      lng: 37.378847,
    });
  }
}

function sortLowToHigh(offers: TOffers): TOffers {
  return offers.slice().sort((a, b) => a.price - b.price);
}

function sortHighToLow(offers: TOffers): TOffers {
  return offers.slice().sort((a, b) => b.price - a.price);
}

function sortByRating(offers: TOffers): TOffers {
  return offers.slice().sort((a, b) => b.rating - a.rating);
}

function sortOffers(offers: TOffers, sortingType: string): TOffers { // offers - это офферы в первоначальном порядке
  switch (sortingType) {
    case SortingType.LowToHigh:
      return sortLowToHigh(offers);
    case SortingType.HighToLow:
      return sortHighToLow(offers);
    case SortingType.TopRated:
      return sortByRating(offers);
    default: //  = Popular
      return offers; // первоначальный порядок
  }
}

function checkReviewValidate(comment: string, rating: number): boolean {
  return (comment.length >= MIN_COMMENT_LENGTH
            && comment.length <= MAX_COMMENT_LENGTH
            && rating >= MIN_RATING && rating <= MAX_RATING);
}

function sortReviews(reviwes: TReviews): TReviews {
  return reviwes.slice().sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));
}

export {selectOffersByCity, selectFavorites, getCityLocation, findOfferByID, sortOffers, checkReviewValidate, sortReviews};
