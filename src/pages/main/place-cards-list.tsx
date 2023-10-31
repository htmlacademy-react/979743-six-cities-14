import { OfferInfoProps } from '../offer/offer';
import PlaceCard from './place-card';

type PlaceCardsListProps = {
  offers: OfferInfoProps[];
};

function PlaceCardsList({offers}: PlaceCardsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <article key = {offer.id} className="cities__card place-card">
          <PlaceCard offer = {offer}/>
        </article>
      ))}
    </div>
  );
}

export default PlaceCardsList;
