import Header from '../../components/header/header';
import MainWithOffers from './main-with-offers';
import MainEmpty from './main-empty';
import { useAppSelector } from '../../hooks';
import Spinner from '../../components/spiner/spinner';

function MainPage(): JSX.Element {

  const currentCity: string = useAppSelector((state) => state.city); // извлекаем данные из store - город
  const offersByCity = useAppSelector((state) => state.sortedOffers); // извлекаем данные из store - офферы по городу

  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);

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
