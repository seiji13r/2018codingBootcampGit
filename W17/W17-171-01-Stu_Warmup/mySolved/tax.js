var calculateTax = function(price) {
  // Fill in code here
  // price = parseFloat(price);
  return (price * 1.08).toFixed(2);
};

module.exports = calculateTax;
