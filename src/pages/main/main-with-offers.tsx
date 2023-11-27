import { TOffers } from '../../types/offers';
import { CityLocationType } from '../../types/cities';
import Tabs from '../../components/tabs/tabs';
import Map from './map';
import PlaceCardsList from '../../components/place-card-list/place-cards-list';
import PlacesSortingForm from './places-sorting-form';
import { useState } from 'react';
import { getCityLocation } from '../../util';

type MainWithOffersProps = {
  offers: TOffers;
  currentCity: string;
}

function MainWithOffers({offers, currentCity}: MainWithOffersProps): JSX.Element {
  // на входе офферы, отфильтрованные по городу; фильтрация в mainPage

  const [activeCardId, setState] = useState<number | null>(null);
  const cityLocation: CityLocationType = getCityLocation(offers, currentCity);

  const placeCardsClassList = { // список классов для списка офферов
    containerClassList: 'cities__places-list places__list tabs__content',
    itemClassList: 'cities__card place-card',
    cardClassList: 'cities__image-wrapper place-card__image-wrapper',
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {currentCity}</b>
            <PlacesSortingForm />
            <PlaceCardsList offers = {offers} setState = {setState} classList = {placeCardsClassList}/>
          </section>
          <Map cityLocation = {cityLocation} offers = {offers} activeCardId = {activeCardId}/>
        </div>
      </div>
    </main>
  );
}

export default MainWithOffers;
