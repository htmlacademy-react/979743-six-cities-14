import { TOffers } from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type ClassListProps = {
  containerClassList: string;
  itemClassList: string;
  cardClassList: string;
};

type PlaceCardsListProps = {
  offers: TOffers;
  onMouseMouve(id: string | null): void | null;
  classList: ClassListProps;

};

function PlaceCardsList({offers, onMouseMouve, classList}: PlaceCardsListProps): JSX.Element {

  const {containerClassList, itemClassList, cardClassList} = classList;

  return (
    <div className={containerClassList}>
      {offers.map((offer) => (
        <article
          key = {offer.id}
          className={itemClassList}
          onMouseOver = {() => onMouseMouve(offer.id)}
          onMouseOut = {() => onMouseMouve(null)}
        >
          <PlaceCard offer = {offer} cardClassList = {cardClassList}/>
        </article>
      ))}
    </div>
  );
}

export default PlaceCardsList;
