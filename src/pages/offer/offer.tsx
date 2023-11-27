import Header from '../../components/header/header';
// import { useAppSelector } from '../../hooks';
// import { findOfferByID } from '../../util';
import { TOfferInfo } from '../../types/offer-info';
// import axios, { AxiosInstance } from 'axios';
// import { APIRoute, REQUEST_TIMEOUT, BASE_URL } from '../../const';
import ReviewsList from './reviews-list';
import CommentForm from './comment-form';
import PlaceCardsList from '../../components/place-card-list/place-cards-list';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Map from '../main/map';
import { CityLocationType } from '../../types/cities';
import './offer.css';
import { REVIEWS } from '../../mocks/reviews'; // ВРЕМЕННО. запрашивает данные с сервера
import { OFFERS } from '../../mocks/offers'; //  Потом будет запрос на сервер на получение офферов неподалеку

function Offer(): JSX.Element {
  const params = useParams();

  // const offers = useAppSelector((state) => state.offers); // извлекаем данные из store - офферы
  const offerInfo: TOfferInfo = {};

  // const url = `${BASE_URL}${APIRoute.Offers}/${params.id}`;

  // axios.get(url , {timeout: REQUEST_TIMEOUT})
  //   .then((response) => {
  //     console.log(`Status code ${response.status}`);
  //     offerInfo = response.data;
  //     console.log(offerInfo);
  //   })
  //   .catch((err) => {
  //     console.log('Error: что-то пошло не так', err);
  //   });

  //здесь видимо должен быть запрос данных на сервер по id оффера, а не передача данных через пропс

  const [activeCardId, setState] = useState<number | null>(null);

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

  return (
    <div className="page">
      <Header />
      <Helmet>
        <title>6 городов. Предложение {params.id}</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/room.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-02.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-03.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/studio-01.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio" />
              </div>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  Beautiful &amp; luxurious studio at great location
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
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">4.8</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  Apartment
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offerInfo.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  <li className="offer__inside-item">
                    Wi-Fi
                  </li>
                  <li className="offer__inside-item">
                    Washing machine
                  </li>
                  <li className="offer__inside-item">
                    Towels
                  </li>
                  <li className="offer__inside-item">
                    Heating
                  </li>
                  <li className="offer__inside-item">
                    Coffee machine
                  </li>
                  <li className="offer__inside-item">
                    Baby seat
                  </li>
                  <li className="offer__inside-item">
                    Kitchen
                  </li>
                  <li className="offer__inside-item">
                    Dishwasher
                  </li>
                  <li className="offer__inside-item">
                    Cabel TV
                  </li>
                  <li className="offer__inside-item">
                    Fridge
                  </li>
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    Angelina
                  </span>
                  <span className="offer__user-status">
                    Pro
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
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
            <Map cityLocation = {cityLocation} offers = {OFFERS} activeCardId = {activeCardId}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlaceCardsList offers = {OFFERS} setState = {setState} classList = {placeCardsClassList}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
