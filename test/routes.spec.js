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

  beforeEach((done) => {
    database.migrate.rollback()
    .then(() => {
      database.migrate.latest()
      .then(() => {
        database.seed.run()
        .then(() => {
          done();
        });
      });
    });
  });

  describe('GET /api/v1/brewery', () => {
    it('should return all of the breweries', (done) => {
      chai.request(server)
      .get('/api/v1/brewery')
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.length.should.equal(30);
        response.body[0].should.have.property('name');
        response.body.find(obj => {
          return obj.name === 'Great Divide Brewing Company'
        }).name.should.equal('Great Divide Brewing Company');
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
        response.body.find(obj => {
          return obj.name === 'Great Divide Brewing Company'
        }).name.should.equal('Great Divide Brewing Company');
        done();
      });
    });

    it('should return an error if a requested brewery does not exist', (done) => {
      chai.request(server)
      .get('/api/v1/brewery/100')
      .end((error, response) => {
        response.should.have.status(404);
        done();
      });
    });
  });

  describe('POST /api/v1/brewery', () => {
    it('should create a new brewery', (done) => {
      chai.request(server)
      .post('/api/v1/brewery')
      .send({
        name: 'New Local Brewery'
      })
      .end((error, response) => {
        response.should.have.status(201);
        response.body[0].should.be.a('object');
        response.body[0].should.have.property('name');
        response.body[0].name.should.equal('New Local Brewery');
        response.body[0].id.should.equal(31);
        chai.request(server)
        .get('/api/v1/brewery')
        .end((error, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('array');
          response.body.length.should.equal(31);
          response.body[30].should.have.property('name');
          response.body[30].name.should.equal('New Local Brewery');
          done();
        });
      });
    });

    it('should not create a record if "name" parameter is missing', () => {
      chai.request(server)
      .post('/api/v1/brewery')
      .send({
        brewery_name: 'New Brewery'
      })
      .end((error, response) => {
        response.should.have.status(422);
        response.body.error.should.equal('Missing required parameter name.');
        done();
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
        response.body.length.should.equal(69);
        response.body[0].should.have.property('name');
        response.body.find(obj => {
          return obj.name === 'Denver Pale Ale'
        }).name.should.equal('Denver Pale Ale');
        response.body[0].should.have.property('style');
        response.body.find(obj => {
          return obj.style === 'American Pale Wheat Ale(APA)'
        }).style.should.equal('American Pale Wheat Ale(APA)');
        response.body[0].should.have.property('size');
        response.body[0].size.should.equal('12 oz');
        response.body[0].should.have.property('abv');
        response.body.find(obj => {
          return obj.name === 'Denver Pale Ale'
        }).abv.should.equal('5.0%');
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
        done();
      });
    });
  })

  describe('POST /api/v1/brewery/:id/beer', () => {

    it('should post beer to a specific brewery', (done) => {
      chai.request(server)
      .post('/api/v1/brewery/1/beer')
      .send({
        id: 70,
        name: 'New Beer',
        style: 'Porter',
        size: '12 oz',
        abv: '4%',
        brewery_id: 1
      })
      .end((error, response) => {
        response.should.have.status(201);
        response.body.should.be.a('object');
        response.body.should.have.property('name');
        response.body.name.should.equal('New Beer');
        done()
      })
    })
  })

});














//
