import Header from '../../components/header/header';
import FavoritesEmpty from './favorites-empty';
import FavoritesFull from './favorites-full';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';

function Favorites(): JSX.Element {
  const favorites = useAppSelector((state) => state.favoritesOffers);
  const favoritesCount: number = favorites.length;
  const favoritesClassList: string = favoritesCount === 0 ? 'page page--favorites-empty' : 'page';
  return (
    <div className={favoritesClassList}>
      <Header />
      <Helmet>
        <title>6 городов. Избранное</title>
      </Helmet>
      {favoritesCount === 0 ? <FavoritesEmpty /> : <FavoritesFull favorites = {favorites}/>}
    </div>
  );
}

export default Favorites;
