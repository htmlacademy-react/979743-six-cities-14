import Header from '../../components/header/header';
import FavoritesEmpty from './favorites-empty';
import FavoritesFull from './favorites-full';
import { Helmet } from 'react-helmet-async';
import Spinner from '../../components/spiner/spinner';
import { useAppSelector } from '../../hooks';
import { getFavorites, getIsFavoritesLoading } from '../../store/data-process/selectors';
import { getAuthorizationStatus } from '../../store/auth-process/selectors';
import { AuthorizationStatus } from '../../const';

function Favorites(): JSX.Element {
  const favorites = useAppSelector(getFavorites);
  const isFavoritesLoading = useAppSelector(getIsFavoritesLoading);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (isFavoritesLoading && authorizationStatus === AuthorizationStatus.Unknown) {
    return (<Spinner />);
  }

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
