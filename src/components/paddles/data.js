
import faker from 'faker';

import images from './media/manifest';

const img = (ix) => (
  images.list[ix] ? images.list[ix] : 'https://unsplash.it/200/300/?random'
);

const athlete = (firstName = 'Paddy') => (
  `${firstName} ${faker.name.lastName()}`
);

const randInt = (max = 99, min = 50) => (
  Math.floor(Math.random() * (max - min)) + min
);

const model = () => (
  `Paddle Product ${randInt()}`
  // `Paddle Model: ${faker.hacker.noun()}`
);

const paddles = [
  {
    category: 'S.U.P.',
    list: [
      {
        img: img(0),
        athlete: athlete(),
        rank: 5,
        model: model()
      },

      {
        img: img(1),
        athlete: athlete(),
        rank: 2,
        model: model()
      },

      {
        img: img(2),
        athlete: athlete(),
        rank: 56,
        model: model()
      }
    ]
  },

  {
    category: 'Outrigger',
    list: [
      {
        img: img(0),
        athlete: athlete(),
        rank: 3,
        model: model()
      },

      {
        img: img(1),
        athlete: athlete(),
        rank: 8,
        model: model()
      },

      {
        img: img(2),
        athlete: athlete(),
        rank: 12,
        model: model()
      }
    ]
  },

  {
    category: 'Dragonboat',
    list: [
      {
        img: img(0),
        athlete: athlete(),
        rank: 20,
        model: model()
      },

      {
        img: img(1),
        athlete: athlete(),
        rank: 17,
        model: model()
      },

      {
        img: img(2),
        athlete: athlete(),
        rank: 49,
        model: model()
      }
    ]
  }
];

export default paddles;
