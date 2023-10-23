import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { USER_INFO } from './mocks/mock';

const qty: number = 327;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      userInfo = {USER_INFO}
      qty = {qty}
    />
  </React.StrictMode>
);
