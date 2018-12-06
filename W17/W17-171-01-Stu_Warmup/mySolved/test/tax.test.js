var expect = require("chai").expect;
var calculateTax = require("../tax");

calculateTax(10)

// Write tests for the calculateTax function here
describe("CalculateTax", function() {
  it("Should Return the Price Plus Tax", function() {
    var expectedresult = 10.8
    expect(calculateTax(10)).to.equal(expectedresult.toFixed(2));
  });

});