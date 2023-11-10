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

enum AppRoute {
  Main = '/',
  Login = '/login',
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

const URL_MARKER_ACTIVE =
  './img/pin-active.svg';

const ICON_SIZE: PointExpression = [30, 40];

const ICON_ANCHOR: PointExpression = [20, 40];

enum ParentForPlaceCardList {
  Main = 'Main',
  Offer = 'Offer'
}

export {DEFAULT_CITY, City, AppRoute, AuthorizationStatus, URL_MARKER_DEFAULT, URL_MARKER_ACTIVE, ICON_ANCHOR, ICON_SIZE, ParentForPlaceCardList};
