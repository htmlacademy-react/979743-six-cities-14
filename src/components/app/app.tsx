import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main/main-page';
// import MainEmpty from '../../pages/main-empty/main-empty';
import Offer from '../../pages/offer/offer'; //OfferNotLogged не нужен, меняется header
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
// import FavoritesEmpty from '../../pages/favorites-empty/favorites-empty';
// import Header from '../header/header';
import Error404 from '../../pages/error/error';
import { HeaderProps } from '../header/header';
import { OfferInfoProps } from '../../pages/offer/offer';


export type AppProps = {
  // здесь будут объекты с данными для ВСЕХ страниц и компонентов
  userInfo: HeaderProps;
  placesQty: number;
  offers: OfferInfoProps[];
  favorites: OfferInfoProps[];
};

function App({userInfo, placesQty, offers, favorites}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            // пока отдаю все офферы, но надо будет делать выборку по городу
            element={<MainPage userInfo = {userInfo} placesQty = {placesQty} offers = {offers} />}
          />
          <Route
            path={AppRoute.Login}
            element={<Login userInfo = {userInfo} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorites userInfo = {userInfo} favorites = {favorites}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.OfferId}
            element={<Offer userInfo = {userInfo} offerInfo = {offers[0]}/>} // как передать один элемент массива?
          />
          <Route
            path="*"
            element={<Error404 />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
