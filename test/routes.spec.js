const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');

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

});
