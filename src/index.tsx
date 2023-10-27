import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { USER_INFO, PLACES_QTY } from './mocks/mock';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      userInfo = {USER_INFO}
      placesQty = {PLACES_QTY}
    />
  </React.StrictMode>
);
