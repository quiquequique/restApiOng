let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let { User } = require('../models');
//assertion style
chai.should();
chai.use(chaiHttp);

let newUserTest = {
  firstName: 'Bart',
  lastName: 'Simpsons',
  email: 'bart@gmail1.com',
  password: '123456',
  photo:
    'https://a-static.besthdwallpaper.com/asus-rog-mobile-papel-pintado-16711_L.jpg'
};

const adminUser = {
  email: 'admin@test.com',
  password: '123456'
};
const adminPassError = {
  email: 'admin@test.com',
  password: '1234567'
};
const userOnlyEmail = {
  email: 'admin@test.com'
};

const userOnlyPassword = {
  password: '123456'
};

let token = process.env.ADMIN_TOKEN;
// parent block
describe('Test authorization endpoints', () => {
  describe('POST /auth/register', () => {
    it('It should post a user', (done) => {
      chai
        .request(server)
        .post('/users/auth/register')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send(newUserTest)
        .end((err, response) => {
          response.should.have.status(201);
          done();
        });
    });
  });
  describe('POST /auth/login', () => {
    it('It should login a user', (done) => {
      chai
        .request(server)
        .post('/users/auth/login')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send(adminUser)
        .end((err, response) => {
          token = response.body.accessToken;
          response.should.have.status(202);
          response.body.should.be.a('Object');
          done();
        });
    });
    it('It NOT should login a user because not send email', (done) => {
      chai
        .request(server)
        .post('/users/auth/login')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send(userOnlyPassword)
        .end((err, response) => {
          response.should.have.status(401);
          response.body.errors[0].msg.should.be.eq(
            'The username or password is incorrect'
          );
          done();
        });
    });
    it('It NOT should login a user because not send password', (done) => {
      chai
        .request(server)
        .post('/users/auth/login')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send(userOnlyEmail)
        .end((err, response) => {
          response.should.have.status(401);
          response.body.errors[0].msg.should.be.eq(
            'The username or password is incorrect'
          );
          done();
        });
    });
    it('It NOT should login a user because send incorrect password', (done) => {
      chai
        .request(server)
        .post('/users/auth/login')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send(adminPassError)
        .end((err, response) => {
          response.should.have.status(401);
          response.body.errors[0].msg.should.be.eq(
            'The username or password is incorrect'
          );
          done();
        });
    });
  });
});
