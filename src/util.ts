import dayjs from 'dayjs';
import { TSortType, NewCommentCondition } from './const';
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
    return allOffers[0];
  }
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
      name: 'Москва',
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

function sortOffers(offers: TOffers, sortingType: TSortType): TOffers { // offers - это офферы в первоначальном порядке
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

function checkReviewValidate(comment: string, rating?: number): boolean {
  return (comment?.length >= NewCommentCondition.MinCommentLength
            && comment.length <= NewCommentCondition.MaxCommentLength && rating !== undefined
            && rating >= NewCommentCondition.MinRating && rating <= NewCommentCondition.MaxRating);
}

function sortReviews(reviwes: TReviews): TReviews {
  return reviwes.slice().sort((a, b) => dayjs(b.date).diff(dayjs(a.date)));
}

function getRandomArrayItem(items: Array<string>): string {
  return items[Math.floor(Math.random() * items.length)];
}

export {selectOffersByCity, getCityLocation, findOfferByID, sortOffers, checkReviewValidate, sortReviews, getRandomArrayItem};
