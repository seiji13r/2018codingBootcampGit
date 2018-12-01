var expect = require("chai").expect;
var titlelize = require("../titlelize");


describe("Disemvowel", function() {
  it("Should Titlelize dr.", function() {
    expect(titlelize("dr.")).to.equal("Dr.");
  });

  it("Should Titlelize mr.", function() {
    expect(titlelize("mr.")).to.equal("Mr.");
  });

  it("Should throw when passed a Boolean", function() {
    expect(function() {
      titlelize(false);
    }).to.throw(Error);
  });

  it("Should Break with a Number", function() {
    expect(function() {
      titlelize(666);
    }).to.throw(Error);
  });
});
