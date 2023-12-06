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
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 8
    },
    'maxAdults': 4,
    'previewImage': 'img/apartment-01.jpg',
    'price': 333,
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
  'id': 2,
  'images': [
    'img/2.png'
  ],
  'isFavorite': true,
  'isPremium': false,
  'location': {
    'latitude': 52.3609553943508,
    'longitude': 4.85309666406198,
    'zoom': 8
  },
  'maxAdults': 2,
  'previewImage': 'img/apartment-03.jpg',
  'price': 340,
  'rating': 3.5,
  'title': 'Nice studio at great location',
  'type': 'studio'
};

const offer3 = {
  'bedrooms': 1,
  'city': {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 8
    },
    'name': 'Paris'
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
  'id': 3,
  'images': [
    'img/3.png'
  ],
  'isFavorite': false,
  'isPremium': false,
  'location': {
    'latitude': 52.3909553943508,
    'longitude': 4.929309666406198,
    'zoom': 8
  },
  'maxAdults': 1,
  'previewImage': 'img/apartment-02.jpg',
  'price': 150,
  'rating': 2.5,
  'title': 'Cool studio at cool location',
  'type': 'studio'
};

const offer4 = {
  'bedrooms': 2,
  'city': {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 8
    },
    'name': 'Paris'
  },
  'description': 'Nice cottage in Prostokvashino.',
  'goods': [
    'Heating'
  ],
  'host': {
    'avatarUrl': 'img/1.png',
    'id': 5,
    'isPro': true,
    'name': 'Marusya'
  },
  'id': 4,
  'images': [
    'img/3.png'
  ],
  'isFavorite': true,
  'isPremium': true,
  'location': {
    'latitude': 52.3809553943508,
    'longitude': 4.939309666406198,
    'zoom': 8
  },
  'maxAdults': 5,
  'previewImage': 'img/room.jpg',
  'price': 2000,
  'rating': 4.0,
  'title': 'Prostokvashino hause',
  'type': 'cottage'
};

const offer5 = {
  'bedrooms': 2,
  'city': {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 8
    },
    'name': 'Dusseldorf'
  },
  'description': 'Nice cottage in Prostokvashino.',
  'goods': [
    'Heating'
  ],
  'host': {
    'avatarUrl': 'img/1.png',
    'id': 5,
    'isPro': true,
    'name': 'Marusya'
  },
  'id': 5,
  'images': [
    'img/3.png'
  ],
  'isFavorite': true,
  'isPremium': true,
  'location': {
    'latitude': 52.3809553943508,
    'longitude': 4.939309666406198,
    'zoom': 8
  },
  'maxAdults': 5,
  'previewImage': 'img/room.jpg',
  'price': 2000,
  'rating': 4.0,
  'title': 'Prostokvashino hause',
  'type': 'cottage'
};

const OFFERS = [
  offer1, offer2, offer3, offer4, offer5
];

// const OFFERS = [];

const OFFER = {
  'id': '6af6f711-c28d-4121-82cd-e0b462a27f00',
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment',
  'price': 250,
  'city': {
    'name': 'Amsterdam',
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    }
  },
  'location': {
    'latitude': 52.35514938496378,
    'longitude': 4.673877537499948,
    'zoom': 8
  },
  'isFavorite': false,
  'isPremium': false,
  'rating': 4,
  'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'bedrooms': 3,
  'goods': ['Heating'],
  'host': {
    'name': 'Oliver Conner',
    'avatarUrl': 'https://url-to-image/image.png',
    'isPro': false
  },
  'images': ['https://url-to-image/image.png'],
  'maxAdults': 4
};

export {OFFERS, OFFER};
