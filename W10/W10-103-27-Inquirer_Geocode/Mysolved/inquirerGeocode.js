// Instructions:
// Convert the below geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs.
// Make sure your new code provides the exact same output as it did with process.argv.

// HINT: Don't forget to create your package.json file and save the correct packages to it.
// HINT: You should not need to change *that much* code.

// ========================================================================================================================

// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
var NodeGeocoder = require("node-geocoder");
var inquirer = require("inquirer");

// Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: "l9odjmNrwjywrjGv3CjZKcRtzaKEJKok"
};

var geocoder = NodeGeocoder(options);

// Get all elements in process.argv, starting from index 2 to the end
// Join them into a string to get the space delimited address
// var address = process.argv.slice(2).join(" ");

inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What place are you looking for?",
      name: "place"
    },
    // {
    //   type: "input",
    //   message: "What is the City?",
    //   name: "city"
    // },
    // {
    //   type: "input",
    //   message: "What is the State?",
    //   name: "state"
    // }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    // if (inquirerResponse.confirm) {
    //   console.log("\nWelcome " + inquirerResponse.username);
    //   console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
    // }
    // else {
    //   console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    // }
    // search = inquirerResponse.city + " " + inquirerResponse.state
    
    console.log(inquirerResponse.place);
    // Then use the Google Geocoder to geocode the address
    geocoder.geocode(inquirerResponse.place, function(err, data) {

    // Then console log the result and stringify it.
    // Note the argument of "2" being included in the JSON stringify. This makes the JSON output pretty.
    // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
    console.log(JSON.stringify(data, null, 2));
    });

});