const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");

chai.should();
chai.use(chaiHttp);

describe("API", () => {
  describe("GET Product Info", () => {
    it("data", (done) => {
      chai
        .request(server)
        .get("/browse/v1/product-aggregator/13860428")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.product.product_id.should.to.equal("13860428");
          response.body.product.item.product_description.title.should.to.equal("The Big Lebowski (Blu-ray)");
          response.body.product.price.current_price.should.to.equal("20.10");
          done();
        });
    });
    it("data", (done) => {
      chai
        .request(server)
        .get("/browse/v1/product-aggregator/1dff22345")
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
    it("data", (done) => {
        chai
          .request(server)
          .get("/browse/v1/product-aggregator/1386042")
          .end((err, response) => {
            response.should.have.status(404);
            done();
          });
      });
  });

  describe("GET Price Info", () => {
    it("data", (done) => {
      chai
        .request(server)
        .get("/price/v1/product-price/13860428")
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });
    it("data", (done) => {
      chai
        .request(server)
        .get("/price/v1/product-price/1dff22345")
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
    it("data", (done) => {
        chai
          .request(server)
          .get("/price/v1/product-price/1386042l")
          .end((err, response) => {
            response.should.have.status(404);
            done();
          });
      });
  });
});
