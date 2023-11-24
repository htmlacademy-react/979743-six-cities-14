import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app/app';
import { USER_INFO } from './mocks/mock';
import { OFFERS } from './mocks/offers';
import { favoritesOffers } from './store/action';
import { fetchOffersAction } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// store.dispatch(loadedOffers(OFFERS));
store.dispatch(fetchOffersAction());

store.dispatch(favoritesOffers(OFFERS));

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        userInfo = {USER_INFO}
      />
    </Provider>
  </React.StrictMode>
);
