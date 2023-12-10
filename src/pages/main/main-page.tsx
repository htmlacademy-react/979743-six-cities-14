import Header from '../../components/header/header';
import MainWithOffers from './main-with-offers';
import MainEmpty from './main-empty';
import { useAppSelector } from '../../hooks';
import Spinner from '../../components/spiner/spinner';
import { getIsOffersLoading, getOffers } from '../../store/data-process/selectors';
import { selectOffersByCity } from '../../util';
import { getCity } from '../../store/user-actions/selectors';

function MainPage(): JSX.Element {
  const currentCity: string = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const offersByCity = selectOffersByCity(offers, currentCity);

  const isOffersLoading = useAppSelector(getIsOffersLoading);

  const offerCount = offersByCity.length;

  if (isOffersLoading) {
    return (<Spinner />);
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      {offerCount === 0 ? <MainEmpty currentCity = {currentCity}/> : <MainWithOffers offers = {offersByCity} currentCity = {currentCity}/>}
    </div>
  );
}

export default MainPage;
