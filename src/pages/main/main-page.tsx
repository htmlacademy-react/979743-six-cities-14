import Header, { HeaderProps } from '../../components/header/header';
import { OfferInfoProps } from '../offer/offer';
import MainWithOffers from './main-with-offers';
import MainEmpty from './main-empty';
// import Tabs from '../../components/tabs/tabs';
// import PlacesSortingForm from './places-sorting-form';
// import PlaceCard from './place-card';
// import Map from './map';

type MainProps = {
  userInfo: HeaderProps;
  placesQty: number;
  offers: OfferInfoProps[];
}

function MainPage({userInfo, placesQty, offers}: MainProps): JSX.Element {
  const offerCount = offers.length;
  return (
    <div className="page page--gray page--main">
      <Header userInfo = {userInfo}/>
      {offerCount === 0 ? <MainEmpty /> : <MainWithOffers placesQty = {placesQty}/>}
    </div>
  );
}

export default MainPage;
