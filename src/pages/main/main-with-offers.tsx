import { OfferInfoProps } from '../offer/offer';
import { CityLocationType } from '../../types/cities';
import Tabs from '../../components/tabs/tabs';
import Map from './map';
import PlaceCardsList from './place-cards-list';
import PlacesSortingForm from './places-sorting-form';
import { useState } from 'react';
import { getCityLocation } from '../../util';

type MainWithOffersProps = {
  offers: OfferInfoProps[];
}

const currentCity: string = 'Amsterdam'; // временно. Потом будем получать текущее значение города в пропсах

function MainWithOffers({offers}: MainWithOffersProps): JSX.Element {
  // потом будем получать здесь уже отфильтрованые по городу офферы
  const [activeCardId, setState] = useState<number | null>(null);
  const cityLocation: CityLocationType = getCityLocation(offers, currentCity);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in Amsterdam</b>
            <PlacesSortingForm />
            <PlaceCardsList offers = {offers} setState = {setState} />
          </section>
          <Map cityLocation = {cityLocation} offers = {offers} activeCardId = {activeCardId}/>
        </div>
      </div>
    </main>
  );
}

export default MainWithOffers;
