import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { USER_INFO, PLACES_QTY } from './mocks/mock';
import { OFFERS } from './mocks/offers';
// import { REVIEWS } from './mocks/reviews';
import { selecFavorites } from './util';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const favorites = selecFavorites(OFFERS);

root.render(
  <React.StrictMode>
    <App
      userInfo = {USER_INFO}
      placesQty = {PLACES_QTY}
      offers = {OFFERS}
      favorites = {favorites}
    />
  </React.StrictMode>
);
