import chai from 'chai';
import chaiHttp from 'chai-http';

import app from "../src/app";

const expect = chai.expect;
chai.use(chaiHttp);


describe('csv file parser tests', () => {
  it('should return the correct body structure', (done) => {
    chai.request(app)
      .get("/api/Manufacture")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("array");
        expect(res.body).to.not.be.empty;
        expect(res.body.length).to.not.above(20);
        done();
      });
  });
  it('should return correct message if word not found', (done) => {
    chai.request(app)
      .get("/api/Manufacture jasep")
      .end((err, res) => {
        expect(res.body.message).to.equal("word not found")
        done();
      });
  });
});
