const brewery = [
  {
    id: 1,
    name: 'Great Divide Brewing Company',
  },
  {
    id: 2,
    name: 'Avery Brewing Company',
  },
];

const beer = [
  {
    id: 1,
    name: 'Denver Pale Ale',
    style: 'American Pale Wheat Ale(APA)',
    size: '12 oz',
    abv: '5.0%',
    brewery_id: 1,
  },
  {
    id: 2,
    name: 'Hibernation Ale',
    style: 'Old Ale',
    size: '12 oz',
    abv: '8.7%',
    brewery_id: 1,
  },
  {
    id: 3,
    name: 'Whitewater',
    style: 'American Pale Wheat Ale',
    size: '12 oz',
    abv: '6.1%',
    brewery_id: 2,
  },
  {
    id: 4,
    name: 'Raja',
    style: 'American Double/ Imperial IPA',
    size: '12 oz',
    abv: '8.0%',
    brewery_id: 2,
  },
];

exports.seed = (knex, Promise) => {
  return knex('beer').del()
    .then(() => {
      return knex('brewery').del();
    })
    .then(() => {
      return Promise.all(brewery.map((brewery) => {
        return knex('brewery').insert(brewery);
      }));
    })
    .then(() => {
      return Promise.all(beer.map((beer) => {
        return knex('beer').insert(beer);
      }));
    })
    .then(() => {
      console.log('Re-seeding Complete');
    })
    .catch(() => {
      console.log({ error: 'Error seeding data' });
    });
};
