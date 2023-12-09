import Header from '../../components/header/header';
import FavoritesEmpty from './favorites-empty';
import FavoritesFull from './favorites-full';
import { Helmet } from 'react-helmet-async';
// import { useLoadFavorites } from './use-load-favorites';
import Spinner from '../../components/spiner/spinner';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoritesAction } from '../../store/api-actions';
import { getFavorites, getIsFavoritesLoading } from '../../store/data-process/selectors';

function Favorites(): JSX.Element {

  // const favorites = useAppSelector((state) => state.favoritesOffers);
  // const {isfavoritesLoading, favorites} = useLoadFavorites();

  const favorites = useAppSelector(getFavorites);
  const isFavoritesLoading = useAppSelector(getIsFavoritesLoading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavoritesAction());
  },[dispatch]);

  if (isFavoritesLoading) {
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
