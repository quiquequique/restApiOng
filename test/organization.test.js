/* eslint-disable no-undef */

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');


// Assertion Style
chai.should();
chai.use(chaiHttp);

describe('Organization Route', () => {
  // Test GET public route
  it('It should get ong info', (done) => {
    chai.request(app)
      .get('/organization/public')
      .end((err, responce) => {
        responce.should.have.status(200);
        responce.body.should.be.a('object');
        responce.body.data.length.should.be.eq(1);
        done();
      });
  });
  it('It should NOT get any info', (done) => {
    chai.request(app)
      .get('/organization')
      .end((err, responce) => {
        responce.should.have.status(404);
        done();
      });
  });
  it('It should NOT get any info if /:id', (done) => {
    const id = 1;
    chai.request(app)
      .get(`/organization/public/${id}`)
      .end((err, responce) => {
        responce.should.have.status(404);
        done();
      });
  });
});

// Test Patch route
describe('Organization Route', () => {
  it('It should get ong info', (done) => {
    const id = 2;
    const token = process.env.ADMIN_TOKEN;
    const body = {
      email: 'eabramzon@gmail.com',
      phone: 323232
    };
    chai.request(app)
      .patch(`/organization/public/${id}`)
      .set({ "Authorization": token})
      .send(body)
      .end((err, responce) => {
        responce.should.have.status(200);
        responce.body.should.be.a('object');
        responce.body.msg.updated.should.be.eq(true);
        done();
      });
  });
});
