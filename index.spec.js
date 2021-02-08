//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let { app, server } = require('./src/server');
let should = chai.should();


chai.use(chaiHttp);

/*
  * Test the /GET route
  */
describe('/GET index', () => {
    beforeEach((done) => { //Before each test we empty the database
        console.log("before Each")
        done();
    });
    it('it should GET index route', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.equal('asd')
                done();
            });
    });
});

describe('/GET user', () => {
    beforeEach((done) => { //Before each test we empty the database
        console.log("before Each")
        done();
    });
    it('it should GET user1', (done) => {
        chai.request(app)
            .get('/user/user1')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.equal('user1')
                done();
            });
    });

    it('it should GET user2', (done) => {
        chai.request(app)
            .get('/user/user2')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.equal('user2')
                done();
            });
    });
});


describe('clean up process', () => {
    it('should terminate the serve', (done) => {
        server.close(done);
    });
});