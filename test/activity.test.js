let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let { User } = require('../models');
//assertion style
chai.should();
chai.use(chaiHttp);

let newActivity = {
  name: 'activity three',
  content: 'content content content content',
  image:
    'https://a-static.besthdwallpaper.com/asus-rog-mobile-papel-pintado-16711_L.jpg'
};
let activityWithoutParam = {
  name: 'activity three',
  image:
    'https://a-static.besthdwallpaper.com/asus-rog-mobile-papel-pintado-16711_L.jpg'
};
let valueChange = {
  content: 'content2 content2 content2'
};
let idActivity = '2';

// parent block
describe('Test endpoints Activities', () => {
  const token = process.env.ADMIN_TOKEN;

  describe('POST /activities', () => {
    it('It should post a activity', (done) => {
      chai
        .request(server)
        .post('/activities')
        .set('content-type', 'application/x-www-form-urlencoded')
        .set('authorization', token)
        .send(newActivity)
        .end((err, response) => {
          response.should.have.status(201);
          done();
        });
    });
    it('It NOT should post a activity because not send "content" parameter', (done) => {
      chai
        .request(server)
        .post('/activities')
        .set('content-type', 'application/x-www-form-urlencoded')
        .set('authorization', token)
        .send(activityWithoutParam)
        .end((err, response) => {
          response.should.have.status(400);
          response.body.meta.msg.should.be.eq('bad request');

          done();
        });
    });
  });

  describe('GET /activities', () => {
    it('It should give all activities information', (done) => {
      chai
        .request(server)
        .get('/activities')
        //  .set('authorization', token)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('Array');
          done();
        });
    });
  });
});
