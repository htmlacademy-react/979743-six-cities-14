import { createAction } from '@reduxjs/toolkit';

export const cityChange = createAction('main/cityChange'); // изменение города при клике в меню

export const offersListChange = createAction('main/offersListChange');
