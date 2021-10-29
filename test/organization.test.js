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
  it('It should patch ong info email and phone', (done) => {
    const id = 1;
    const token = process.env.ADMIN_TOKEN;
    const body = {
      email: 'eabramzon@gmail.com',
      phone: 323232
    };
    chai.request(app)
      .patch(`/organization/${id}`)
      .set({ Authorization: token })
      .send(body)
      .end((err, responce) => {
        responce.should.have.status(200);
        responce.body.should.be.a('object');
        responce.body.msg.updated.should.be.eq(true);
        done();
      });
  });
  it('It should restore original state to db', (done) => {
    const id = 1;
    const token = process.env.ADMIN_TOKEN;
    const body = {
      name: 'ONG1',
      image: 'https://www.autofacil.es/wp-content/uploads/2021/07/Novitec-Ferrari-SF90-Stradale-1.jpg',
      address: 'A del valle 4343',
      phone: '4545454',
      email: 'demo@demo.com',
      welcomeText: 'TEXTO BIENVENIDA DE LA ONG Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et commodo diam, ut vulputate leo. Proin ut nisl ac dui facilisis venenatis ac ac augue. Sed vel fermentum nisl. Sed sit amet turpis molestie, tincidunt magna eu, varius nisi. Vestibulum gravida, mauris vitae fermentum efficitur, nibh augue eleifend nisi, quis rhoncus eros orci ut arcu. Praesent aliquam nisi eu arcu mattis gravida. Donec velit mi, laoreet eu lorem non, placerat convallis nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque varius nulla id tellus ultrices tempus. Nulla pellentesque ac nisi ac pretium. Nulla quis fermentum massa, ac suscipit diam. Cras eget finibus justo, auctor faucibus dolor. Vestibulum purus turpis, consequat et diam sed, suscipit laoreet nisi.',
      aboutUsText: 'TEXTO INFORMATIVO DE ESTA ONG Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et commodo diam, ut vulputate leo. Proin ut nisl ac dui facilisis venenatis ac ac augue. Sed vel fermentum nisl. Sed sit amet turpis molestie, tincidunt magna eu, varius nisi. Vestibulum gravida, mauris vitae fermentum efficitur, nibh augue eleifend nisi, quis rhoncus eros orci ut arcu. Praesent aliquam nisi eu arcu mattis gravida. Donec velit mi, laoreet eu lorem non, placerat convallis nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque varius nulla id tellus ultrices tempus. Nulla pellentesque ac nisi ac pretium. Nulla quis fermentum massa, ac suscipit diam. Cras eget finibus justo, auctor faucibus dolor. Vestibulum purus turpis, consequat et diam sed, suscipit laoreet nisi.',
      urlFace: 'https://www.facebook.com/BRACWorld/',
      urlLinked: 'https://www.linkedin.com/company/brac/',
      urlInsta: 'https://www.instagram.com/bracworld/'
    };
    chai.request(app)
      .patch(`/organization/${id}`)
      .set({ Authorization: token })
      .send(body)
      .end((err, responce) => {
        responce.should.have.status(200);
        responce.body.should.be.a('object');
        responce.body.msg.updated.should.be.eq(true);
        done();
      });
  });
  it('It should error 404 incorrect id in query', (done) => {
    const id = 2;
    const token = process.env.ADMIN_TOKEN;
    const body = {
      image: 'https://www.autofacil.es/wp-content/uploads/2021/07/Novitec-Ferrari-SF90-Stradale-1.jpg',
      addresssss: 'A del valle 4343'
    };
    chai.request(app)
      .patch(`/organization/${id}`)
      .set({ Authorization: token })
      .send(body)
      .end((err, responce) => {
        responce.should.have.status(404);
        responce.body.should.be.a('object');
        responce.body.meta.msg.should.be.eq('not found');
        done();
      });
  });
});
