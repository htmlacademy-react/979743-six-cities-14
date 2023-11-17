import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app/app';
import { USER_INFO } from './mocks/mock';
import { OFFERS } from './mocks/offers';
import { selecFavorites } from './util';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const favorites = selecFavorites(OFFERS);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        userInfo = {USER_INFO}
        offers = {OFFERS}
        favorites = {favorites} // отсюда ли их передавать???
      />
    </Provider>
  </React.StrictMode>
);
