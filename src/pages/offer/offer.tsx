import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../components/header/header';
import Spinner from '../../components/spiner/spinner';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { TOfferInfo } from '../../types/offer-info';
import { APIRoute, REQUEST_TIMEOUT, BASE_URL } from '../../const';
import ReviewsList from './reviews-list';
import CommentForm from './comment-form';
import PlaceCardsList from '../../components/place-card-list/place-cards-list';
import Map from '../main/map';
import { CityLocationType } from '../../types/cities';
import './offer.css';
import { REVIEWS } from '../../mocks/reviews'; // ВРЕМЕННО. запрашивает данные с сервера
// import { OFFERS } from '../../mocks/offers';
import { offerInfoLoading, offersLoading } from '../../store/action';
import { processErrorHandle } from '../../services/process-error-handle';
import OfferGallery from './offer-gallery';
import { useLoadOfferInfo } from './offer-info-loading';

function Offer(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();
  const url = `${BASE_URL}${APIRoute.Offers}/${params.id}`;

  const isOfferLoading = useAppSelector((state) => state.isOffersLoading);
  const offerInfo = useAppSelector((state) => state.offerInfo);

  // const [offerInfo, setOfferInfo] = useState<TOfferInfo>(null); // нужно переддавать не null, а объект с пустыми полями, нач. состояние.
  // const [isOfferInfoLoading, setOfferLoading] = useState<boolean>(true);

  if(offerInfo && !(offerInfo.id === params.id)) {
    axios.get<TOfferInfo>(url , {timeout: REQUEST_TIMEOUT})
      .then((response) => {
        dispatch(offerInfoLoading(response.data));
        dispatch(offersLoading(false));
      })
      .catch((err) => {
        // console.log('Error: что-то пошло не так ', err); // TODO
        processErrorHandle(err.response.data.message); // TODO
      });
    // useLoadOfferInfo(params.id);
  }

  // if(offerInfo && !(offerInfo.id === params.id)) {
  //   axios.get<TOfferInfo>(url , {timeout: REQUEST_TIMEOUT})
  //     .then((response) => {
  //       setOfferInfo(response.data);
  //       setOfferLoading(false); //завершили загрузку
  //     })
  //     .catch((err) => {
  //       console.log('Error: что-то пошло не так ', err); // TODO
  //       // dispatch(serverError(???));
  //     });
  // }

  const [activeCardId, setState] = useState<number | null>(null);

  if (isOfferLoading) {
    return (<Spinner />);
  }

  // if (isOfferInfoLoading) {
  //   return (<Spinner />);
  // }

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
        <title>6 городов. Предложение {params.id}</title>
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
                  : ''
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
                      : ''
                  }
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ReviewsList reviews = {REVIEWS} />
                <CommentForm />
              </section>
            </div>
          </div>
          <section className="offer__map map">
            {/* <Map cityLocation = {cityLocation} offers = {OFFERS} activeCardId = {activeCardId}/> */}
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            {/* <PlaceCardsList offers = {OFFERS} setState = {setState} classList = {placeCardsClassList}/> */}
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
