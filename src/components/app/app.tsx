import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main/main';
// import MainEmpty from '../../pages/main-empty/main-empty';
import Offer from '../../pages/offer/offer'; //OfferNotLogged не нужен, меняется header
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
// import FavoritesEmpty from '../../pages/favorites-empty/favorites-empty';
import Header from '../header/header';
import { HeaderProps } from '../header/header';

export type AppProps = {
  // здесь будут объекты с данными для ВСЕХ страниц и компонентов
  userInfo: HeaderProps;
  qty: number;
};

function App({userInfo, qty}: AppProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header userInfo = {userInfo} />
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage qty = {qty} />}
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path={AppRoute.Favorites}
            element={<Favorites />}
          />
          <Route
            path={AppRoute.Offer}
            element={<Offer />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
