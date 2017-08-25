// process.env.NODE_ENV = 'test';
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');

// const environment = process.env.NODE_ENV;
// const configuration = require('../knexfile')[environment];
// const database = require('knex')(configuration);

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

  // beforeEach((done) => {
  //   database.migrate.rollback()
  //   .then(() => {
  //     database.migrate.latest()
  //     .then(() => {
  //       database.seed.run()
  //       .then(() => {
  //         done();
  //       });
  //     });
  //   });
  // });


  describe('GET /api/v1/brewery', () => {
    it('should return all of the breweries', (done) => {
      chai.request(server)
      .get('/api/v1/brewery')
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        // response.body.length.should.equal(30);
        response.body[0].should.have.property('name');
        response.body[0].name.should.equal('Avery Brewing Company');
        done();
      });
    });
  });

  describe('POST /api/v1/brewery', () => {
    it.skip('should create a new brewery', (done) => {
      chai.request(server)
      .post('/api/v1/brewery')
      .send({
        name: 'New Local Brewery'
      })
      .end((error, response) => {
        response.should.have.status(201);
        response.body.should.be.a('object');
        // response.body.should.have.property('name');
        // response.body.lastname.should.equal('New Local Brewery');
        chai.request(server)
        .get('/api/v1/brewery')
        .end((error, response) => {
          response.should.have.status(200);
          response.should.be.json;
          response.body.should.be.a('array');
          done();
        })
      });
    });

    it('should not create a record if "name" parameter is missing', () => {
      chai.request(server)
      .post('/api/v1/brewery')
      .send({
        brewery_name: 'New Brewery'
      })
      .end((error, response) => {
        respons.should.have.status(422);
        response.body.error.should.equal('Missing required parameter name.');
        done();
      })
    })
  });






});














//
