# BYOB (Build Your Own Backend)

This project focuses primarily on building the backend. It uses Node.js, Express with Knex and Postgres. The data compiled for this project includes a list of Colorado local breweries and beers they produce. The app is deployed to heroku and is continuously updated via CircleCI.

## Endpoints
* POST authentication
* GET api/v1/brewery
Returns a list of thirty breweries.
This route does not require authentication.
Breweries can be searched by specific brewery name.
Example:
api/v1/brewery/?name=Avery+Brewing+Company

* GET api/v1/brewery/:id
* POST api/v1/brewery
* PATCH api/v1/brewery/:id
* GET api/v1/beer

Notes:
- what the route returns
- types of errors for each route
- required parameters
- does it need authentication, or not


#### GET api/v1/beer/:id
- Returns information of a single beer 
- [https://jw-byob.herokuapp.com/api/v1/beer/5](https://jw-byob.herokuapp.com/api/v1/beer/5)

* GET api/v1/brewery/:id/beer
* POST api/v1/brewery/:id/beer
* DELETE api/v1/brewery/:id/beer
* PATCH api/v1/beer/:id
* DELETE api/v1/beer/:id

