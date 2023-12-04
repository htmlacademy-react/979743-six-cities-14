import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus, OFFERS_NEARBY_QTY } from '../../const';
import { TOffer, TOffers } from '../../types/offers';
import { CityLocationType } from '../../types/cities';
import { findOfferByID } from '../../util';
import Header from '../../components/header/header';
import Spinner from '../../components/spiner/spinner';
import ReviewsList from './reviews-list';
import CommentForm from './comment-form';
import PlaceCardsList from '../../components/place-card-list/place-cards-list';
import Map from '../main/map';
import OfferGallery from './offer-gallery';
import './offer.css';
import { useLoadOfferInfo } from './use-load-offer-info';
import { useLoadReviews } from './use-load-reviews';
import { useLoadNearby } from './use-load-nearby';

function Offer(): JSX.Element {

  const allOffers = useAppSelector((state) => state.offers);
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);
  const isAuth = useAppSelector((state) => state.authorizationStatus);

  const {isOfferInfoLoading, offerInfo, paramsID} = useLoadOfferInfo();

  const {reviews, isReviewsLoading} = useLoadReviews();
  const {isNearbyLoading, offersNearby} = useLoadNearby();

  const [activeCardId, setState] = useState<string | null>(null);

  if (isOfferInfoLoading || isReviewsLoading || isNearbyLoading || isOffersLoading) {
    return (<Spinner />);
  }

  const currentOfferForMap: TOffer = findOfferByID(allOffers, paramsID); // TODO - плохое решение...
  const offersForMap: TOffers = offersNearby.slice(0, OFFERS_NEARBY_QTY);
  offersForMap.push(currentOfferForMap);

  if(!activeCardId) {
    setState(currentOfferForMap.id);
  }

  const cityLocation: CityLocationType = {
    name: offerInfo.city.name,
    zoom: offerInfo.city.location.zoom,
    lat: offerInfo.city.location.latitude,
    lng: offerInfo.city.location.longitude,
  };

  const placeCardsClassList = { // список классов для списка офферов неподалеку
    containerClassList: 'near-places__list places__list',
    itemClassList: 'near-places__card place-card',
    cardClassList: 'near-places__image-wrapper place-card__image-wrapper',
  };
  const {images, isPremium, title, rating, price, bedrooms, maxAdults, type, goods, host, description} = offerInfo;
  const ratingStarr: string = `${rating / 5 * 100}%`;

  return (
    <div className="page">
      <Header />
      <Helmet>
        <title>6 городов. Предложение {paramsID}</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <OfferGallery images = {images}/>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {
                isPremium
                  ? (<div className="offer__mark"><span>Premium</span></div>)
                  : null
              }
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: ratingStarr}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((good) => (
                    <li className="offer__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {host.name}
                  </span>
                  {
                    host.isPro
                      ? (<div className="offer__user-status"><span>Pro</span></div>)
                      : null
                  }
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews?.length}</span></h2>
                <ReviewsList reviews = {reviews} />
                {
                  isAuth === AuthorizationStatus.Auth
                    ? (<CommentForm />)
                    : null
                }
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map cityLocation = {cityLocation} offers = {offersForMap} activeCardId = {activeCardId}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlaceCardsList offers = {offersNearby} setState = {setState} classList = {placeCardsClassList}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
