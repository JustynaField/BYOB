# BYOB (Build Your Own Backend)

This project focuses primarily on building the backend for an API. It uses Node.js, Express with Knex, and Postgres. The data compiled for this project includes a list of Colorado local breweries and beers they produce. The app is deployed to heroku and is continuously updated via CircleCI.

There are two tables in this project. One titled 'brewery' that holds just the names of Colorado breweries. The second is called 'beer' that describes the different beers for each brewery with 'name', 'style', 'size', and 'abv'.

## Endpoints

#### POST authentication
- Authenticates whether user is admin or not and returns a new json web token (jwt)
- Required parameters: 'email' - Email of user requestion api access; 'appName' - Name of application user will be applying the api to;


#### GET api/v1/brewery
- Returns a list of thirty breweries;
- Example: [https://jw-byob.herokuapp.com/api/v1/brewery/](https://jw-byob.herokuapp.com/api/v1/brewery/);
- Errors: 500 Internal Server Error
- Breweries can be searched by specific brewery name.
Example: [https://jw-byob.herokuapp.com/api/v1/brewery/?name=Avery+Brewing+Company](https://jw-byob.herokuapp.com/api/v1/brewery/?name=Avery+Brewing+Company);

#### GET api/v1/brewery/:id
- Returns a specific brewery by its ID;
- Example: [https://jw-byob.herokuapp.com/api/v1/brewery/1](https://jw-byob.herokuapp.com/api/v1/brewery/1);
- Errors: 404 Could not find brewery with id - if id being searched does not exist; 500 Internal server error

#### POST api/v1/brewery
- Posts new brewery to brewery database;
- Required parameter:
 - 'name' - Name of new brewery;
- Errors: 422 Missing required parameter - 'name' has not been defined; 500 Internal server error;
- Requires authentication;

#### PATCH api/v1/brewery/:id
- Update information for a specific brewery;
- Required parameter: 'name' - Updated name for brewery;
- Errors: 422 Missing required parameter - If name is not entered when updating brewery; 500 internal server error
- Requires authentication

#### GET api/v1/beer
- Returns list of 69 beers from Colorado;
- Example: [https://jw-byob.herokuapp.com/api/v1/beer/](https://jw-byob.herokuapp.com/api/v1/beer/);
- Error: 500 Internal server error


#### GET api/v1/beer/:id
- Returns information of a single beer;
- Example: [https://jw-byob.herokuapp.com/api/v1/beer/5](https://jw-byob.herokuapp.com/api/v1/beer/5);
- Required parameter: 'id' - ID of the selected beer;
- Errors: 404 Not Found - if the beer with the specified ID does not exist;

#### GET api/v1/brewery/:id/beer
- Returns all beers for a specific brewery;
- Example: [https://jw-byob.herokuapp.com/api/v1/brewery/1/beer](https://jw-byob.herokuapp.com/api/v1/brewery/1/beer);
- Required parameter: 'brewery_id';
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


