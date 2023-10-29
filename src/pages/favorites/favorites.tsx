import Header, { HeaderProps } from '../../components/header/header';
import FavoritesEmpty from './favorites-empty';
import FavoritesFull from './favorites-full';
import { OfferInfoProps } from '../offer/offer';
import { Helmet } from 'react-helmet-async';

type FavoritesProps = {
  userInfo: HeaderProps;
  favorites: OfferInfoProps[];
}

function Favorites({userInfo, favorites}: FavoritesProps): JSX.Element {
  const favoritesCount: number = favorites.length;
  const favoritesClassList: string = favoritesCount === 0 ? 'page page--favorites-empty' : 'page';
  return (
    <div className={favoritesClassList}>
      <Header userInfo = {userInfo}/>
      <Helmet>
        <title>6 городов. Избранное</title>
      </Helmet>
      {favoritesCount === 0 ? <FavoritesEmpty /> : <FavoritesFull />}
      <FavoritesFull />
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
