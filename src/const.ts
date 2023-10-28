// неизменяемые величины во проекте
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
  // OffetId = ':id'
  OfferId = `${AppRoute.Offer}/:id` // так тоже можно
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export {DEFAULT_CITY, City, AppRoute, AuthorizationStatus};
