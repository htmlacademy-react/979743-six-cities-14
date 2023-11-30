import { PointExpression } from 'leaflet';

const DEFAULT_CITY = 'Paris';

enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

enum AppRoute { // адреса для запросов к серверу
  Main = '/',
  Login = '/login',
  Logout = '/logout',
  Favorites = '/favorites',
  Offer = '/offer',
  OfferId = `${AppRoute.Offer}/:id` // так тоже можно
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

const URL_MARKER_DEFAULT = './img/pin.svg';

const URL_MARKER_ACTIVE = './img/pin-active.svg';

const ICON_SIZE: PointExpression = [30, 40];

const ICON_ANCHOR: PointExpression = [20, 40];

const SORTING_TYPES = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'] as const;

const DEFAULT_SORTING_TYPE = 'Popular';

const BASE_URL = 'https://14.design.pages.academy/six-cities';

const REQUEST_TIMEOUT = 5000;

enum APIRoute {
  Offers = '/offers',
  Favorites = '/favorite',
  Login = '/login',
  Logout = '/logout',
}

const TIMEOUT_SHOW_ERROR = 2000;

const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

export {
  DEFAULT_CITY,
  City,
  AppRoute,
  AuthorizationStatus,
  URL_MARKER_DEFAULT,
  URL_MARKER_ACTIVE,
  ICON_ANCHOR,
  ICON_SIZE,
  SORTING_TYPES,
  DEFAULT_SORTING_TYPE,
  BASE_URL,
  REQUEST_TIMEOUT,
  APIRoute,
  TIMEOUT_SHOW_ERROR,
  AUTH_TOKEN_KEY_NAME,
};
