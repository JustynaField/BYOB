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
- Returns information of a single beer;
- Required parameter: 'id' - ID of the selected beer;
- [https://jw-byob.herokuapp.com/api/v1/beer/5](https://jw-byob.herokuapp.com/api/v1/beer/5);
- Errors: 404 Not Found - if the beer with the specified ID does not exist;

#### GET api/v1/brewery/:id/beer
- Returns all beers for a specific brewery;
- Required parameter: 'brewery_id';
- [https://jw-byob.herokuapp.com/api/v1/brewery/1/beer](https://jw-byob.herokuapp.com/api/v1/brewery/1/beer);
- Errors: 404 Not Found - if the brewery under the provided ID does not exist;

#### POST api/v1/brewery/:id/beer
- Creates a new beer for a specified brewery;
- Required parameters for the new beer being posted: 'name', 'style', 'size', 'abv';
- Errors: 422 Unprocessable Entity - if any of the required parameters is missing; 404 Not Found - if the brewery under the provided id does not exist;
- Requires authentication; 

#### DELETE api/v1/brewery/:id/beer
- Deletes all beers from a specified brewey;
- Required parameter: 'brewery_id';
- Errors: 404 Not Found - if the brewery under provided ID does not exist;
- Requires authentication;

#### PATCH api/v1/beer/:id
- Updates some keys in a specified beer;
- Required parameter: 'id' - ID of the selected beer;
- Errors: 404 Not Found - if the requested beer does not exist;

#### DELETE api/v1/beer/:id
- Deletes one beer;
- Required parameter: 'id' - ID of the beer to delete;
- Errors: 404 Not Found - if the requested beer does not exist;


