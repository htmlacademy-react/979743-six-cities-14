import Header from '../../components/header/header';
import { HeaderProps } from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import PlacesSortingForm from './places-sorting-form';
import PlaceCard from './place-card';
import Map from './map';

export type MainProps = {
  // здесь будут объекты с данными для компонентов этой страницы
  userInfo: HeaderProps;
}

function MainPage({userInfo}: MainProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header userInfo = {userInfo} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
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
    </div>
  );
}

export default MainPage;
