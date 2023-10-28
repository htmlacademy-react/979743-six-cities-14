import { OfferInfoProps } from '../offer/offer';
import Tabs from '../../components/tabs/tabs';
import Map from './map';
import PlaceCard from './place-card';
import PlacesSortingForm from './places-sorting-form';

type MainWithOffersProps = {
  offers: OfferInfoProps[];
  placesQty: number;
}

function MainWithOffers({offers, placesQty}: MainWithOffersProps): JSX.Element {
  console.log(offers);

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
            <div className="cities__places-list places__list tabs__content">
              {offers.map((offer) => (
                <article key = {offer.id} className="cities__card place-card">
                  <PlaceCard offer = {offer}/>
                </article>
              ))}
            </div>
          </section>
          <Map />
        </div>
      </div>
    </main>
  );
}

export default MainWithOffers;
