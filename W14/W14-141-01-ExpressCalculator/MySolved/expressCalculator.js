// Dependencies
var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/:value1/:value2", function(req, res) {

  // TODO parse out the variables from the request
  // Parameters are received from the URL
  var operation = req.params.operation;
  // TODO make sure they're converted to integers (and not strings)
  var value1 = parseInt(req.params.value1);
  var value2 = parseInt(req.params.value2);
  console.log(operation,value1,value2);
  // Parameters are converted to integer
  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
  // BONUS - How could you use * + etc. inside the app.get()?
  case "add":
    // Add your logic here. Pun intended.
    result = value1 + value2;
    break;
  case "subtract":
    // Subtract logic
    result = value1 - value2;
    break;
  case "multiply":
    // Multiply
    result = value1 * value2;
    break;
  case "divide":
    // Divide
    result = value1 / value2;
    break;
  case "power":
    // Divide
    result = value1 ** value2;
    break;
  default:
    // Handle anything that isn't specified
    result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  // res.send(result);
  // res.send(result.toString());
  res.send(result.toFixed(2).toString());

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
