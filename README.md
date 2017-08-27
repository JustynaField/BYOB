# BYOB

The project focuses on building out backend. The data compiled for this project includes a list of Colorado local breweries and beers they produce.

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



Justyna:
* GET api/v1/beer/:id
* GET api/v1/brewery/:id/beer
* POST api/v1/brewery/:id/beer
* DELETE api/v1/brewery/:id/beer
* PATCH api/v1/beer/:id
* DELETE api/v1/beer/:id

