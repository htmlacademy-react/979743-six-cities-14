import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { USER_INFO, PLACES_QTY, OFFERS } from './mocks/mock';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      userInfo = {USER_INFO}
      placesQty = {PLACES_QTY}
      offers = {OFFERS}
      favorites = {OFFERS}
    />
  </React.StrictMode>
);
