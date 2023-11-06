import { OfferInfoProps } from '../offer/offer';
import Tabs from '../../components/tabs/tabs';
import Map from './map';
import PlaceCardsList from './place-cards-list';
import PlacesSortingForm from './places-sorting-form';
import { useState } from 'react';

type MainWithOffersProps = {
  offers: OfferInfoProps[];
  placesQty: number;
}

function MainWithOffers({offers, placesQty}: MainWithOffersProps): JSX.Element {
  const [state, setState] = useState(offers[0].id); // по идеее длжно быть что-то типа null
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesQty} places to stay in Amsterdam</b>
            <PlacesSortingForm />
            <PlaceCardsList offers = {offers} setState = {setState} />
          </section>
          <Map />
        </div>
      </div>
    </main>
  );
}

export default MainWithOffers;
