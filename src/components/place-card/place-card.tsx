import { OfferInfoProps } from '../../pages/offer/offer';
import { Link } from 'react-router-dom';

type PlaceCardProps = {
  offer: OfferInfoProps;
  cardClassList: string;
}

//на входе уже соответствующий оффер
function PlaceCard({offer, cardClassList}: PlaceCardProps): JSX.Element {
  const {isPremium, previewImage, price, rating, title, type} = offer;
  const ratingStarr: string = `${rating / 5 * 100}%`;
  return (
    <>
      {
        isPremium
          ? (<div className="place-card__mark"><span>Premium</span></div>)
          : ''
      }
      <div className={cardClassList}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
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

export default PlaceCard;