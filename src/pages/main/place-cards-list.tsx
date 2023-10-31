import { OfferInfoProps } from '../offer/offer';
import PlaceCard from './place-card';
import { useState } from 'react';

type PlaceCardsListProps = {
  offers: OfferInfoProps[];
};

function PlaceCardsList({offers}: PlaceCardsListProps): JSX.Element {
  const [state, setState] = useState({
    activeCardId: offers[0].id});
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <article
          key = {offer.id}
          className="cities__card place-card"
          onMouseOver = {() => setState({
            ...state,
            activeCardId: offer.id
          })}
        >
          <PlaceCard offer = {offer} />
        </article>
      ))}
    </div>
  );
}

export default PlaceCardsList;
