import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/app/app';
import { USER_INFO } from './mocks/mock';
import { OFFERS } from './mocks/offers';
import { selecFavorites } from './util';
import { loadOffers } from './store/action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
store.dispatch(loadOffers(OFFERS));
const favorites = selecFavorites(OFFERS);

// наверное, здесь должен быть запрос на сервер и получение данных
// где офферы класть в store? наверное, это должен делать можуль, который запросы на сервер делает
// данные получил - действие - сохранение в store

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        userInfo = {USER_INFO}
        favorites = {favorites} // отсюда ли их передавать???
      />
    </Provider>
  </React.StrictMode>
);
