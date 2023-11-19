import Header, { HeaderProps } from '../../components/header/header';
import { OfferInfoProps } from '../offer/offer';
import MainWithOffers from './main-with-offers';
import MainEmpty from './main-empty';
import { useAppSelector } from '../../hooks';
import { selectOffersByCity } from '../../util';

type MainProps = {
  userInfo: HeaderProps;
  offers: OfferInfoProps[];
}

function MainPage({userInfo, offers}: MainProps): JSX.Element {

  const currentCity: string = useAppSelector((state) => state.city); // извлекаем данные из store - город
  const offersByCity = selectOffersByCity(offers, currentCity);

  const offerCount = offersByCity.length;
  return (
    <div className="page page--gray page--main">
      <Header {...userInfo}/>
      {offerCount === 0 ? <MainEmpty currentCity = {currentCity}/> : <MainWithOffers offers = {offersByCity} currentCity = {currentCity}/>}
    </div>
  );
}

export default MainPage;
