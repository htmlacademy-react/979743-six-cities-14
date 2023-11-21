import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from '../private-route/private-route';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main/main-page';
import Offer from '../../pages/offer/offer';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Error404 from '../../pages/error/error';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { HeaderProps } from '../header/header';

export type AppProps = {
  userInfo: HeaderProps;
};

function App({userInfo}: AppProps): JSX.Element {
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
                <Favorites userInfo = {userInfo}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.OfferId}
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
