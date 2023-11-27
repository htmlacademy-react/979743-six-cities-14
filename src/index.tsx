import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import { USER_INFO } from './mocks/mock';
// import { OFFERS } from './mocks/offers';
// import { favoritesOffers } from './store/action';
import { fetchOffersAction } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffersAction());

// store.dispatch(favoritesOffers(OFFERS));

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <App
        userInfo = {USER_INFO}
      />
    </Provider>
  </React.StrictMode>
);
