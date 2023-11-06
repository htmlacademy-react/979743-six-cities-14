import Header, { HeaderProps } from '../../components/header/header';
import { OfferInfoProps } from '../offer/offer';
import MainWithOffers from './main-with-offers';
import MainEmpty from './main-empty';

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
      {/* // пока передаю в Main ВСЕ офферы, в дальнейшем нужно будет делать выборку по городу */}
      {offerCount === 0 ? <MainEmpty /> : <MainWithOffers offers = {offers} placesQty = {placesQty}/>}
    </div>
  );
}

export default MainPage;
