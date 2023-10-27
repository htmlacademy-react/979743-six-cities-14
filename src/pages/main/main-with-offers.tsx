import Tabs from '../../components/tabs/tabs';
import Map from './map';
import PlaceCard from './place-card';
import PlacesSortingForm from './places-sorting-form';

function MainWithOffers(): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{515} places to stay in Amsterdam</b>
            <PlacesSortingForm />
            <div className="cities__places-list places__list tabs__content">
              <PlaceCard />
              <PlaceCard />
              <PlaceCard />
              <PlaceCard />
            </div>
          </section>
          <Map />
        </div>
      </div>
    </main>
  );
}

export default MainWithOffers;
