// временные данные; структура как с сервера

const PLACES_QTY: number = 350;

const USER_INFO = {
  avatarUrl: 'img/1.png',
  email: 'Marusya.conner@gmail.com',
  id: 1,
  isPro: false,
  name: 'Marusya.conner',
  token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20='
};

const offer1 =
  {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      },
      'name': 'Amsterdam'
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [
      'Heating'
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'id': 3,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': 1,
    'images': [
      'img/1.png'
    ],
    'isFavorite': true,
    'isPremium': true,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'price': 320,
    'rating': 4.8,
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'apartment'
  };

const offer2 = {
  'bedrooms': 2,
  'city': {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 8
    },
    'name': 'Amsterdam'
  },
  'description': 'Nice studio in Amsterdam.',
  'goods': [
    'Heating'
  ],
  'host': {
    'avatarUrl': 'img/2.png',
    'id': 5,
    'isPro': true,
    'name': 'Marusya'
  },
  'id': 5,
  'images': [
    'img/2.png'
  ],
  'isFavorite': false,
  'isPremium': false,
  'location': {
    'latitude': 52.35514938496378,
    'longitude': 4.673877537499948,
    'zoom': 8
  },
  'maxAdults': 2,
  'previewImage': 'img/1.png',
  'price': 100,
  'rating': 4.5,
  'title': 'Nice studio at great location',
  'type': 'studio'
};

const offer3 = {
  'bedrooms': 2,
  'city': {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 8
    },
    'name': 'Amsterdam'
  },
  'description': 'Nice studio in Amsterdam.',
  'goods': [
    'Heating'
  ],
  'host': {
    'avatarUrl': 'img/1.png',
    'id': 5,
    'isPro': true,
    'name': 'Marusya'
  },
  'id': 2,
  'images': [
    'img/1.png'
  ],
  'isFavorite': false,
  'isPremium': false,
  'location': {
    'latitude': 52.35514938496378,
    'longitude': 4.673877537499948,
    'zoom': 8
  },
  'maxAdults': 2,
  'previewImage': 'img/1.png',
  'price': 515,
  'rating': 4.5,
  'title': 'Nice studio at great location',
  'type': 'studio'
};

const OFFERS = [
  offer1, offer2, offer3
];

// const OFFERS = [];

export {USER_INFO, PLACES_QTY, OFFERS};
