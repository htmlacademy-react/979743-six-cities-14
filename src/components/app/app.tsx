import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main/main';
// import MainEmpty from '../../pages/main-empty/main-empty';
import Offer from '../../pages/offer/offer'; //OfferNotLogged не нужен, меняется header
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
// import FavoritesEmpty from '../../pages/favorites-empty/favorites-empty';
// import Header from '../header/header';
import Error404 from '../../pages/error/error';
import { HeaderProps } from '../header/header';
import PrivateRoute from '../private-route/private-route';

export type AppProps = {
  // здесь будут объекты с данными для ВСЕХ страниц и компонентов
  userInfo: HeaderProps;
  placesQty: number;
};

function App({userInfo, placesQty}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage userInfo = {userInfo} placesQty = {placesQty} />}
          />
          <Route
            path={AppRoute.Login}
            element={<Login userInfo = {userInfo} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorites userInfo = {userInfo}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<Offer userInfo = {userInfo}/>}
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
