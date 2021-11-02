const chai = require("chai");
let server = require("../app");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const token = process.env.ADMIN_TOKEN;
const { testimony, testimonyedit } = require("./index");

describe("Testimony Routes", () => {
  describe("POST /testimonials", (done) => {
    it("It should create and display a testimony", (done) => {
      chai
        .request(server)
        .post("/testimonials")
        .set({ Authorization: token })
        .send(testimony)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.have.property("name");
          res.body.should.have.property("content");
          res.body.should.be.a("object");
          done();
        });
    });
  });
  describe("PUT /testimonials/:id", (done) => {
    it("It should edit a testimony by id", (done) => {
      chai
        .request(server)
        .put("/testimonials/8")
        .set({ Authorization: token })
        .send(testimonyedit)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("name");
          res.body.should.have.property("content");
          res.body.should.be.a("object");
          done();
        });
    });
  });

  describe("DELETE /testimonials", (done) => {
    it("It should delete a news by id", (done) => {
      chai
        .request(server)
        .delete("/testimonials/2")
        .set({ Authorization: token })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.meta.msg.should.be.eq("Successfully removed");
          done();
        });
    });
  });
});
