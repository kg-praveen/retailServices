const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");

chai.should();
chai.use(chaiHttp);

//Testing product API
describe("API", () => {
  describe("GET Product Info", () => {
    it("GET valid product", (done) => {
      chai
        .request(server)
        .get("/browse/v1/product-aggregator/13860428")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.product.product_id.should.to.equal("13860428");
          response.body.product.item.product_description.title.should.to.equal(
            "The Big Lebowski (Blu-ray)"
          );
          response.body.product.price.current_price.should.to.equal("20.10");
          done();
        });
    });//13860428

    it("GET valid product", (done) => {
      chai
        .request(server)
        .get("/browse/v1/product-aggregator/13860427")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.product.product_id.should.to.equal("13860427");
          response.body.product.item.product_description.title.should.to.equal(
            "Conan the Barbarian (dvd_video)"
          );
          response.body.product.price.current_price.should.to.equal("10.00");
          done();
        });
    });//13860427

    it("GET valid product", (done) => {
      chai
        .request(server)
        .get("/browse/v1/product-aggregator/13860425")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.product.product_id.should.to.equal("13860425");
          response.body.product.item.product_description.title.should.to.equal(
            "Godzilla (Blu-ray)"
          );
          response.body.product.price.current_price.should.to.equal("99.99");
          done();
        });
    });//13860425

    it("GET product with invalid id", (done) => {
      chai
        .request(server)
        .get("/browse/v1/product-aggregator/1dff22345")
        .end((err, response) => {
          response.should.have.status(400);
          response.body.should.be.a('object');
          response.body.error_code.should.to.equal("INVALID_PRODUCTID");
          done();
        });
    });

    it("GET product with non-existing id", (done) => {
      chai
        .request(server)
        .get("/browse/v1/product-aggregator/1386042")
        .end((err, response) => {
          response.should.have.status(404);
          response.body.should.be.a('object');
          response.body.error_code.should.to.equal("PRODUCT_NAME_NOT_FOUND");
          done();
        });
    });

    it("GET product for item without price record", (done) => {
      chai
        .request(server)
        .get("/browse/v1/product-aggregator/13860423")
        .end((err, response) => {
          response.should.have.status(404);
          response.body.should.be.a('object');
          response.body.error_code.should.to.equal("PRODUCT_PRICE_NOT_FOUND");
          done();
        });
    });//13860423
  });

  

  //Testing pricing API
  describe("GET Price Info", () => {
    it("GET price for valid product", (done) => {
      chai
        .request(server)
        .get("/price/v1/product-price/13860428")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.current_price.should.to.equal("20.10");
          done();
        });
    });
    it("GET price for invalid product id", (done) => {
      chai
        .request(server)
        .get("/price/v1/product-price/1dff22345")
        .end((err, response) => {
          response.should.have.status(400);
          response.body.should.be.a('object');
          response.body.error_code.should.to.equal("INVALID_PRODUCTID");
          done();
        });
    });
    it("GET price for non-existing product id", (done) => {
      chai
        .request(server)
        .get("/price/v1/product-price/1386042")
        .end((err, response) => {
          response.should.have.status(404);
          response.body.should.be.a('object');
          response.body.error_code.should.to.equal("PRODUCT_NAME_NOT_FOUND");
          done();
        }); //this test will fail as pricing is a mock API
    });
  });
});
