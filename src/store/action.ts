import { createAction } from '@reduxjs/toolkit';

// export const cityChange = createAction('main/cityChange'); // изменение города при клике в меню
export const cityChange = createAction<string>('main/cityChange'); // если вызвать с аргументом, то он подставится в поле payload.

export const offersListChange = createAction('main/offersListChange'); // нужен ли??

export const sortingChange = createAction<string>('main/sortingChange');
