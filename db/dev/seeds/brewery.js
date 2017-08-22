let breweryData = [
  {
    'id': 1,
    'name': 'Great Divide Brewing Company',
    'beers': [
      {
        'id': 1,
        'name': 'Whitewater',
        'style': 'American Pale Wheat Ale',
        'size': '12 oz',
        'abv': '6.1%',
        'brewery_id': 1
      }
    ]
  },
  {
    'id': 2,
    'name': 'Avery Brewing Company',
    'beers': [
      {
        'id': 2,
        'name': 'Raja',
        'style': 'American Pale Wheat Ale',
        'size': '12 oz',
        'abv': '6.1%',
        'brewery_id': 2
      },
      {
        'id': 3,
        'name': 'Lasso',
        'style': 'American Pale Wheat Ale',
        'size': '12 oz',
        'abv': '6.1%',
        'brewery_id': 2
      }
    ]
  }
];

// let beerData = [
//   {
//     'id': 1,
//     'name': 'Whitewater',
//     'style': 'American Pale Wheat Ale',
//     'size': '12 oz',
//     'abv': '6.1%',
//     'brewery_id': 1
//   },
//   {
//     'id': 2,
//     'name': 'Raja',
//     'style': 'American Pale Wheat Ale',
//     'size': '12 oz',
//     'abv': '6.1%',
//     'brewery_id': 2
//   },
//   {
//     'id': 3,
//     'name': 'Lasso',
//     'style': 'American Pale Wheat Ale',
//     'size': '12 oz',
//     'abv': '6.1%',
//     'brewery_id': 2
//   }
// ];

const createBrewery = (knex, brewery) => {
  console.log(brewery);
  return knex('brewery').insert({
    name: brewery.name
  }, 'id')
  .then(breweryId => {
    let beerPromises = [];

    brewery.beers.forEach(beer => {
      beerPromises.push(
        createBeer(knex, {
          name: beer.name,
          style: beer.style,
          size: beer.size,
          abv: beer.abv,
          brewery_id: beer.brewery_id
        })
      )
    })
    return Promise.all(beerPromises)
  })
}

const createBeer = (knex, beer) => {
  return knex('beer').insert(beer)
}

exports.seed = (knex, Promise) => {
  return knex('beer').del()
    .then(() => knex('brewery').del())
    .then(() => {
      let breweryPromises = [];

      breweryData.forEach(brewery => {
        breweryPromises.push(createBrewery(knex, brewery));
      })

      return Promise.all(breweryPromises)
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
}
