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
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { HeaderProps } from '../header/header';
import { OfferInfoProps } from '../../pages/offer/offer';


export type AppProps = {
  userInfo: HeaderProps;
  favorites: OfferInfoProps[];
};

function App({userInfo, favorites}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage userInfo = {userInfo} />}
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
            // element={<Offer userInfo = {userInfo} offerInfo = {offers[0]}/>} // как передать один элемент массива?
            element={<Offer userInfo = {userInfo} />} // как передать один элемент массива?
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
