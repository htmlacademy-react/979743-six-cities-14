import { OfferInfoProps } from '../offer/offer';
import PlaceCard from './place-card';

type PlaceCardsListProps = {
  offers: OfferInfoProps[];
  setState(id: number | null): React.SetStateAction<number | null>;
};

function PlaceCardsList({offers, setState}: PlaceCardsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <article
          key = {offer.id}
          className="cities__card place-card"
          onMouseOver = {() => setState(offer.id)}
          onMouseOut = {() => setState(null)}
        >
          <PlaceCard offer = {offer} />
        </article>
      ))}
    </div>
  );
}

export default PlaceCardsList;
