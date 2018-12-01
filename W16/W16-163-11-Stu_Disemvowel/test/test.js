var expect = require("chai").expect;
var disemvowel = require("../disemvowel");


describe("Disemvowel", function() {
  it("Should Return the number as String", function() {
    expect(disemvowel(666)).to.equal("666");
  });

  it("Should Remove vowels in the String", function() {
    expect(disemvowel("Seiji")).to.equal("Sj");
  });

  it("Should throw when passed a Boolean", function() {
    expect(function() {
      disemvowel(false);
    }).to.throw(Error);
  });
});
