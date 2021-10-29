/* eslint-disable no-undef */

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

// Assertion Style
chai.should();
chai.use(chaiHttp);

describe('Contact Route', () => {
  // Test GET route
  it('It should get ong info', (done) => {
    const token = process.env.ADMIN_TOKEN;
    chai.request(app)
      .get('/backoffice/contacts')
      .set({ Authorization: token })
      .end((err, responce) => {
        responce.should.have.status(200);
        responce.body.should.be.a('object');
        done();
      });
  });
  it('It should NOT get any info because does not have correct token', (done) => {
    chai.request(app)
      .get('/backoffice/contacts')
      .end((err, responce) => {
        responce.should.have.status(403);
        responce.body.should.be.a('object');
        done();
      });
  });
  it('It should NOT get any info if /:id', (done) => {
    const token = process.env.ADMIN_TOKEN;
    const id = 1;
    chai.request(app)
      .get(`/backoffice/contacts${id}`)
      .set({ Authorization: token })
      .end((err, responce) => {
        responce.should.have.status(404);
        done();
      });
  });
  it('It should post a new contact', (done) => {
    const body = {
      firstName: 'Carlos',
      lastName: 'Carla',
      email: 'marla12345@gmail.com',
      phone: 252525,
      message: 'esto es un mensaje nuevo de esta',
    };
    chai.request(app)
      .post('/contacts')
      .send(body)
      .end((err, responce) => {
        responce.should.have.status(200);
        responce.body.should.be.a('object');
        responce.body.meta.msg.created.should.be.eq(true);
        done();
      });
  });
  it('It should not post a new contact because it is a  "no name message"', (done) => {
    const body = {
      // firstName: 'Carlos',
      lastName: 'Carla',
      email: 'marla12345@gmail.com',
      phone: 252525,
      message: 'esto es un mensaje nuevo de esta',
    };
    chai.request(app)
      .post('/contacts')
      .send(body)
      .end((err, responce) => {
        responce.should.have.status(400);
        responce.body.should.be.a('object');
        responce.body.meta.msg.should.be.eq('bad request');
        done();
      });
  });
  it('It should not post a new contact because it has a invalid route', (done) => {
    const body = {
      // firstName: 'Carlos',
      lastName: 'Carla',
      email: 'marla12345@gmail.com',
      phone: 252525,
      message: 'esto es un mensaje nuevo de esta',
    };
    chai.request(app)
      .post('/contacts/all')
      .send(body)
      .end((err, responce) => {
        responce.should.have.status(404);
        responce.body.should.be.a('object');
        done();
      });
  });
});
