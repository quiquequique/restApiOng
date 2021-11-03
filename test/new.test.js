const chai = require("chai");
let server = require("../app");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const token = process.env.ADMIN_TOKEN;
const { news, newsedit } = require("./index");

describe("News Routes", () => {
  describe("GET /news", () => {
    it("It should GET all the news.", (done) => {
      chai
        .request(server)
        .get("/news")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });

  describe("GET /new/:id", () => {
    it("It should GET a news by ID", (done) => {
      chai
        .request(server)
        .get(`/news/1`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("id", 1);
          done();
        });
    });
    it("It should NOT GET a news by ID", (done) => {
      chai
        .request(server)
        .get(`/news/0`)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a("object");
          res.body.meta.msg.should.be.eq("bad request");
          done();
        });
    });
  });
  describe("POST /news", (done) => {
    it("It should create and display a news", (done) => {
      chai
        .request(server)
        .post("/news")
        .set({ Authorization: token })
        .send(news)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a("object");
          done();
        });
    });
  });
  describe("PUT /news/:id", (done) => {
    it("It should edit a news by id", (done) => {
      chai
        .request(server)
        .put("/news/1")
        .set({ Authorization: token })
        .send(newsedit)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.meta.msg.should.be.eq("Successful update");
          done();
        });
    });
  });
  describe("DELETE /news", (done) => {
    it("It should delete a news by id", (done) => {
      chai
        .request(server)
        .delete("/news/1")
        .set({ Authorization: token })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.meta.msg.should.be.eq("Successfully removed");
          done();
        });
    });
  });
});
