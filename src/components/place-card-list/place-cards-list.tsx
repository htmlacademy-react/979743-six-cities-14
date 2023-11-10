import { OfferInfoProps } from '../../pages/offer/offer';
import PlaceCard from '../place-card/place-card';
import { ParentForPlaceCardList } from '../../const';

type PlaceCardsListProps = {
  offers: OfferInfoProps[];
  // setState(id: number | null): React.SetStateAction<number | null>;
  setState(id: number | null): void | null;
  parentPage: string;
};

function PlaceCardsList({offers, setState, parentPage}: PlaceCardsListProps): JSX.Element {
  let containerClassList: string;
  let itemClassList: string;
  let cardClassList: string;

  switch(parentPage) {
    case ParentForPlaceCardList.Main:
      containerClassList = 'cities__places-list places__list tabs__content';
      itemClassList = 'cities__card place-card';
      cardClassList = 'cities__image-wrapper place-card__image-wrapper';
      break;
    case ParentForPlaceCardList.Offer:
      containerClassList = 'near-places__list places__list';
      itemClassList = 'near-places__card place-card';
      cardClassList = 'near-places__image-wrapper place-card__image-wrapper';
      break;
    default:
      containerClassList = '';
      itemClassList = '';
      cardClassList = '';
  }
  return (
    <div className={containerClassList}>
      {offers.map((offer) => (
        <article
          key = {offer.id}
          className={itemClassList}
          onMouseOver = {() => setState(offer.id)}
          onMouseOut = {() => setState(null)}
        >
          <PlaceCard offer = {offer} cardClassList = {cardClassList}/>
        </article>
      ))}
    </div>
  );
}

export default PlaceCardsList;
