const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

const config = require('dotenv').config()

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3000);
app.set('secretKey', process.env.SECRET_KEY);

app.get('/', (request, response) => {
	response.sendFile(__dirname + '/index.html');
});


const checkAuth = (request, response, next) => {
	const token = request.headers.token

	if(!token) {
		response.status(403).send('You must be authorized to hit this endpoint.')
	}
	jwt.verify(token, app.get('secretKey'), (error, decoded) => {
		if (error) {
			response.status(403).send('Invalid token.')
		}

		if (decoded.admin) {
			next()
		} else {
      response.status(403).send('You must have admin privelages')
    }
	})
}

app.post('/authentication', (request, response) => {

  const userData = request.body;

  if(userData.email.endsWith('@turing.io')) {
    userData.admin = true
  }
  let token = jwt.sign(userData, app.get('secretKey'), {expiresIn: "48h"})

  response.status(200).json({ token })
})

app.get('/api/v1/brewery', (request, response) => {
	database('brewery')
    .modify((queryParam) => {
      if (request.query.name) {
        queryParam.where("name", request.query.name)
      }
    })
    .select()
		.then(breweries => {
			response.status(200).json(breweries);
		})
		.catch(error => {
			response.status(500).json({ error });
		});
});

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
				});
			}
		})
		.catch(error => {
			response.status(500).json({ error });
		});
});

app.post('/api/v1/brewery', checkAuth, (request, response) => {
	const newBrewery = request.body;

	for (let requiredParameter of ['name']) {
		if (!newBrewery[requiredParameter]) {
			return response.status(422).json({
				error: `Missing required parameter ${requiredParameter}`
			});
		}
	}
	database('brewery').insert(newBrewery, '*')
		.then(brewery => {
			response.status(201).json( brewery );
		})
		.catch(error => {
			response.status(500).json({ error });
		});
});

app.patch('/api/v1/brewery/:id', checkAuth, (request, response) => {
	const newData = request.body;

	for (let requiredParameter of ['name']) {
		if (!newData[requiredParameter]) {
			return response.status(422).json({
				error: `Missing required parameter ${requiredParameter}`
			});
		}
	}

	database('brewery')
		.where('id', request.params.id)
		.update(newData, '*')
		.then(data => {
			response.status(201).json(data);
		})
		.catch(error => {
			console.log(error);
			response.status(500).json({ error });
		});
});

app.get('/api/v1/beer', (request, response) => {
	database('beer').select()
		.then(beers => {
			response.status(200).json(beers);
		})
		.catch(error => {
			response.status(500).json({ error });
		});
});

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
				});
			}
		})
		.catch(error => {
			response.status(500).json({error});
		});
});

app.get('/api/v1/brewery/:id/beer', (request, response) => {
  database('beer')
    .where('brewery_id', request.params.id)
    .select()
    .then(beer => {
      response.status(200).json(beer);
    })
    .catch(error => {
      response.status(404).json({
        error: `Could not find brewery with id of ${request.params.id}`
      })
    })
})

app.delete('/api/v1/brewery/:id/beer', (request, response) => {
  database('beer')
    .where('brewery_id', request.params.id)
    .del('*')
    .then(data => {
      response.status(201).json(data)
    })
    .catch(error => {
      response.status(500).json({ error })
    })
});

app.post('/api/v1/brewery/:id/beer', (request, response) => {
	const newBeer = request.body;

	for(let requiredParameter of ['name', 'style', 'size', 'abv']) {
		if (!newBeer[requiredParameter]) {
			return response.status(422).json({
				error: `Missing required parameter ${requiredParameter}`
			});
		}
	}

	newBeer.brewery_id = request.params.id;

	database('brewery').select()
		.then(brewery => {
			database('beer').insert(newBeer, '*')
				.then(beer => {
					response.status(201).json(beer[0]);
				});
		})
		.catch(error => {
			response.status(500).json({ error });
		});
});

app.patch('/api/v1/beer/:id', (request, response) => {
	const newData = request.body;

	database('beer')
		.where('id', request.params.id)
		.update(newData, '*')
		.then(data => {
			response.status(201).json(data);
		})
		.catch(error => {
			console.log(error);
			response.status(500).json({ error });
		});
});

app.delete('/api/v1/beer/:id', (request, response) => {
  database('beer')
    .where('id', request.params.id)
    .del('*')
    .then(data => {
      response.status(201).json(data)
    })
    .catch(error => {
      response.status(500).json({ error })
    })
});

app.listen(app.get('port'), () => {
	console.log(`BYOB is running on ${app.get('port')}.`);
});

module.exports = app;
