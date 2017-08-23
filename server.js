const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3000);


app.get('/', (request, response) => {
  response.send('It\'s conected');
});

app.get('/api/v1/brewery', (request, response) => {
  database('brewery').select()
  .then(breweries => {
    response.status(200).json(breweries);
  })
  .catch(error => {
    response.status(500).json({ error })
  })
})

app.get('/api/v1/brewery/:id', (request, response) => {
  database('brewery')
  .where('id', request.params.id)
  .select()
  .then(brewery => {
    if (brewery.length) {
      response.status(200).json(brewery);
    } else {
      response.status(404).json({
        error: `Could not find brewery with id of ${request.params.id}`
      })
    }
  })
  .catch(error => {
    response.status(500).json({ error })
  })
})

app.post('/api/v1/brewery', (request, response) => {
  const newBrewery = request.body;

  for (let requiredParameter of ['name']) {
    if (!newBrewery[requiredParameter]) {
      return response.status(422).json({
        error: `Missing required parameter ${requiredParameter}`
      })
    }
  }

  database('brewery').insert(newBrewery, '*')
  .then(brewery => {
    response.status(201).json( brewery )
  })
  .catch(error => {
    response.status(500).json({ error })
  })
})

app.patch('/api/v1/brewery/:id', (request, response) => {
  const newData = request.body;

  database('brewery')
    .where('id', request.params.id)
    .update(newData, '*')
    .then(data => {
      response.status(201).json(data)
    })
    .catch(error => {
      console.log(error)
      response.status(500).json({ error })
    })
})


app.get('/api/v1/beer', (request, response) => {
  database('beer').select()
  .then(beers => {
    response.status(200).json(beers);
  })
  .catch(error => {
    response.status(500).json({ error })
  })
})

app.get('/api/v1/beer/:id', (request, response) => {
  database('beer')
  .where('id', request.params.id)
  .select()
  .then(beer => {
    if (beer.length) {
      response.status(200).json(beer);
    } else {
      response.status(404).json({
        error: `Could not find beer with id of ${request.params.id}`
      })
    }
  })
  .catch(error => {
    response.status(500).json({error})
  })
})

app.post('/api/v1/brewery/:id/beer', (request, response) => {
  const newBeer = request.body

  for(let requiredParameter of ['name', 'style', 'size', 'abv']) {
    if (!newBeer[requiredParameter]) {
      return response.status(422).json({
        error: `Missing required parameter ${requiredParameter}`
      });
    }
  }

  newBeer.brewery_id = request.params.id

  database('brewery').select()
  .then(brewery => {
    database('beer').insert(newBeer, '*')
    .then(beer => {
      response.status(201).json(beer[0])
    })
  })
  .catch(error => {
    response.status(500).json({ error })
  })
})

app.patch('/api/v1/beer/:id', (request, response) => {
  const newData = request.body;

  database('beer')
    .where('id', request.params.id)
    .update(newData, '*')
    .then(data => {
      response.status(201).json(data)
    })
    .catch(error => {
      console.log(error)
      response.status(500).json({ error })
    })
})

app.listen(app.get('port'), () => {
  console.log(`BYOB is running on ${app.get('port')}.`);
});
