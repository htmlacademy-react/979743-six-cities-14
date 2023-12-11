import { useAppDispatch } from '../../hooks';
import { changeFavoritesAction } from '../../store/api-actions';
import { Link } from 'react-router-dom';
import { TFavorite } from '../../types/favorites';

type FavoritesCardProps = {
  offer: TFavorite;
}

function FavoritesCard({offer}: FavoritesCardProps): JSX.Element {
  const dispatch = useAppDispatch();

  const {id, isPremium, price, previewImage, title, type, rating} = offer;
  const ratingStarr: string = `${Math.round(rating) / 5 * 100}%`;
  return (
    <>
      {
        isPremium
          ? (<div className="place-card__mark"><span>Premium</span></div>)
          : ''
      }
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
            onClick={() => {
              dispatch(changeFavoritesAction({
                offerID: id,
                status: 0,
              }));
            }}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingStarr}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </>
  );
}

export default FavoritesCard;
