import Tabs from '../../components/tabs/tabs';
import PlacesSortingForm from './places-sorting-form';
import PlaceCard from './place-card';
import Map from './map';

type MainProps = {
  qty: number;
}

function MainPage({qty}: MainProps): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{qty} places to stay in Amsterdam</b>
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

export default MainPage;
