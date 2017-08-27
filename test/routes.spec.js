process.env.NODE_ENV = 'test';
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');

const environment = process.env.NODE_ENV;
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

chai.use(chaiHttp);

describe('Client Routes', () => {
  it('should run homepage with text', (done) => {
    chai.request(server)
    .get('/')
    .end((error, response) => {
      response.should.have.status(200);
      response.should.be.html;
      done();
    });
  });

  it('should return 404 for a route that does not exist', () => {
    chai.request(server)
    .get('/api/v1/breweries')
    .end((error, response) => {
      response.should.have.status(404);
      done();
    });
  });
});

describe('API Routes', () => {

  before((done) => {
    database.migrate.latest()
      .then(() => done())
      .catch(error => console.log(error));
  });

  beforeEach((done) => {
    database.seed.run()
      .then(() => done())
      .catch(error => console.log(error));
  });

  describe('GET /api/v1/brewery', () => {
    it('should return all of the breweries', (done) => {
      chai.request(server)
      .get('/api/v1/brewery')
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.length.should.equal(2);
        response.body[0].should.have.property('name');
        response.body[0].name.should.equal('Great Divide Brewing Company');
        done();
      });
    });
  });

  describe('GET /api/v1/brewery/:id', () => {
    it('should return a brewery by id', (done) => {
      chai.request(server)
      .get('/api/v1/brewery/1')
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body[0].should.be.a('object');
        response.body.length.should.equal(1);
        response.body[0].should.have.property('name');
        response.body[0].id.should.equal(1);
        done();
      });
    });

    it('should return an error if a requested brewery does not exist', (done) => {
      chai.request(server)
      .get('/api/v1/brewery/100')
      .end((error, response) => {
        response.should.have.status(404);
        response.body.error.should.equal('Could not find brewery with id of 100');
        done();
      });
    });
  });

  describe('POST /api/v1/brewery', () => {
    it('should create a new brewery', (done) => {
      chai.request(server)
      .post('/authentication')
      .send({
        email: 'user@turing.io',
        appName: 'appName'
      })
      .end((error, response) => {
        let token = response.body
        chai.request(server)
        .post('/api/v1/brewery')
        .set({'token': `${token.token}` })
        .send({
          id: 3,
          name: 'New Local Brewery'
        })
        .end((error, response) => {
          response.should.have.status(201);
          response.body[0].should.be.a('object');
          response.body[0].should.have.property('name');
          response.body[0].name.should.equal('New Local Brewery');
          response.body[0].id.should.equal(3);
          chai.request(server)
          .get('/api/v1/brewery')
          .end((error, response) => {
            response.should.have.status(200);
            response.should.be.json;
            response.body.should.be.a('array');
            response.body.length.should.equal(3);
            response.body[2].should.have.property('name');
            response.body[2].name.should.equal('New Local Brewery');
            done();
          });
        });
      });
    });

    it('should not create a record if "name" parameter is missing', (done) => {
      chai.request(server)
      .post('/authentication')
      .send({
        email: 'user@turing.io',
        appName: 'appName'
      })
      .end((error, response) => {
        let token = response.body
        chai.request(server)
        .post('/api/v1/brewery')
        .set({'token': `${token.token}`})
        .send({
          brewery_name: 'New Brewery'
        })
        .end((error, response) => {
          response.should.have.status(422);
          response.body.error.should.equal('Missing required parameter name');
          done();
        });
      });
    });
  });

  describe('PATCH /api/v1/brewery/:id', () => {
    it('should update a specific brewery', (done) => {
      chai.request(server)
      .post('/authentication')
      .send({
       email: 'user@turing.io',
       appName: 'appName'
      })
      .end((error, response) => {
        let token = response.body
        chai.request(server)
        .patch('/api/v1/brewery/1')
        .set({'token': `${token.token}` })
        .send({
          name: 'Updated Name'
        })
        .end((error, response) => {
          response.should.have.status(201);
          response.body[0].should.be.a('object');
          response.body[0].should.have.property('name');
          response.body[0].name.should.equal('Updated Name');
          chai.request(server)
          .get('/api/v1/brewery/1')
          .end((error, response) => {
            response.should.have.status(200);
            response.should.be.json;
            response.body[0].should.have.property('name');
            response.body[0].name.should.equal('Updated Name');
          })
          done();
        });
      });
    });

    it('should not update a brewery without the required parameter of name', (done) => {
      chai.request(server)
      .post('/authentication')
      .send({
        email: 'user@turing.io'
      })
      .end((error, response) => {
        let token = response.body
        chai.request(server)
        .patch('/api/v1/brewery/1')
        .set({'token': `${token.token}`})
        .send({
          location: 'Denver'
        })
        .end((error, response) => {
          response.should.have.status(422);
          response.body.error.should.equal('Missing required parameter name');
          done();
        });
      });
    });
  });

  describe('GET /api/v1/beer', () => {
    it('should return all beers', (done) => {
      chai.request(server)
      .get('/api/v1/beer')
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.length.should.equal(4);
        response.body[0].should.have.property('name');
        response.body[0].name.should.equal('Denver Pale Ale');
        response.body[0].should.have.property('style');
        response.body[0].style.should.equal('American Pale Wheat Ale(APA)');
        response.body[0].should.have.property('size');
        response.body[0].size.should.equal('12 oz');
        response.body[0].should.have.property('abv');
        response.body[0].abv.should.equal('5.0%');
        done();
      });
    });
  });

  describe('GET /api/v1/beer/:id', () => {
    it('should return beer by id', (done) => {
      chai.request(server)
      .get('/api/v1/beer/3')
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        done();
      });
    });

    it('should not return beer that does not exist', (done) => {
      chai.request(server)
      .get('/api/v1/beer/100')
      .end((error, response) => {
        response.should.have.status(404);
        response.body.error.should.equal('Could not find beer with id of 100')
        done();
      });
    });
  });

  describe('GET /api/v1/brewery/:id/beer', () => {
    it('should get all beers for a specific brewery', (done) => {
      chai.request(server)
      .get('/api/v1/brewery/1/beer')
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.beer.should.be.a('array');
        response.body.beer[0].should.be.a('object');
        response.body.beer.length.should.equal(2);
        response.body.beer[0].should.have.property('name');
        response.body.beer[0].name.should.equal('Denver Pale Ale');
        response.body.beer[1].should.have.property('name');
        response.body.beer[1].name.should.equal('Hibernation Ale');
        response.body.beer[0].should.have.property('id');
        response.body.beer[0].id.should.equal(1);
        response.body.beer[1].should.have.property('id');
        response.body.beer[1].id.should.equal(2);
        done();
      });
    });

    it('should return no beers if id is not found', (done) => {
      chai.request(server)
      .get('/api/v1/brewery/50/beer')
      .end((error, response) => {
        response.should.have.status(404)
        response.body.error.should.equal('No breweries with this id exist')
        done();
      })
    })
  });

  describe('POST /api/v1/brewery/:id/beer', () => {
    it('should post beer to a specific brewery', (done) => {
      chai.request(server)
      .post('/authentication')
      .send({
        email: 'user@turing.io',
        appName: 'appName'
      })
      .end((error, response) => {
        let token = response.body
        chai.request(server)
        .post('/api/v1/brewery/1/beer')
        .set({'token': `${token.token}`})
        .send({
          id: 5,
          name: 'New Beer',
          style: 'Porter',
          size: '12 oz',
          abv: '4%',
          brewery_id: 1
        })
        .end((error, response) => {
          response.should.have.status(201);
          response.body.should.be.a('object');
          response.body.beer[0].should.have.property('name');
          response.body.beer[0].name.should.equal('New Beer');
          done()
        });
      });
    });

    it('should not post a beer missing required parameters', (done) => {
      chai.request(server)
      .post('/authentication')
      .send({
        email: 'user@turing.io'
      })
      .end((error, response) => {
        let token = response.body
        chai.request(server)
        .post('/api/v1/brewery/1/beer')
        .set({'token': `${token.token}`})
        .send({
          id: 5,
          style: 'Porter',
          size: '12 oz',
          abv: '4%',
          brewery_id: 1
        })
        .end((error, response) => {
          response.should.have.status(422);
          done()
        });
      });
    })

    it('should not add a beer if the id does not exist ', (done) => {
      chai.request(server)
      .post('/authentication')
      .send({
        email: 'user@turing.io'
      })
      .end((error, response) => {
        let token = response.body
        chai.request(server)
        .post('/api/v1/brewery/50/beer')
        .set({'token': `${token.token}`})
        .send({
          id: 5,
          name: 'New Beer',
          style: 'Porter',
          size: '12 oz',
          abv: '4%'
        })
        .end((error, response) => {
          response.should.have.status(404);
          done()
        });
      });
    })
  });

  describe('DELETE /api/v1/brewery/:id/beer', () => {
    it('should delete all beers for a specific brewery', (done) => {
      chai.request(server)
      .end((error, response) => {
        chai.request(server)
        .end((error, response) => {
        });
      });
    });

    it('should not delete a beer if the brewery does not exist', (done) => {
      chai.request(server)
      .end((error, response) => {
      })
    })
  });

  describe('PATCH /api/v1/beer/:id', () => {
    it('should update a specific beer', (done) => {
      chai.request(server)
      .patch('/api/v1/beer/1')
      .send({
        name: 'Updated Beer',
        style: 'Updated Style'
      })
      .end((error, response) => {
        response.should.have.status(201);
        done();
      });
    });
  });

  describe('DELETE /api/v1/beer/:id', () => {
    it('should delete a specific beer', (done) => {
      chai.request(server)
      .delete('/api/v1/beer/1')
      .end((error, response) => {
        response.body.obj.length.should.equal(1);
        chai.request(server)
        .get('/api/v1/beer')
        .end((error, response) => {
          response.body.length.should.equal(3);
        });
      done();
      });
    });

    it('should not delete beer if it does not exist', (done) => {
      chai.request(server)
      .delete('/api/v1/beer/200')
      .end((error, response) => {
        response.should.have.status(404);
        response.body.error.should.equal('No beers exist with that id')
        done()
      })
    })
  });

})
