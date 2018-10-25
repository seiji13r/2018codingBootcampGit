// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// * Then if a user's password matches a pre-defined password, re-display the data back to the user with some text.

// Remember to be creative!

// ========================================================================

var validPassword = "abcde";

// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "password",
      message: "Set your password",
      name: "password"
    },
    // Here we give the user a list to choose from.
    {
      type: "checkbox",
    //   type: 'expand',
      message: "Which Pokemon do you choose?",
    //   default: 0,
      choices: ["Bulbasaur", "Squirtle", "Charmander"],
      name: "pokemon"
    },
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Are you sure:",
      name: "confirm",
      default: true
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm && (inquirerResponse.password == validPassword)) {
        console.log("\nWelcome " + inquirerResponse.username);
        console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
    }
    else if(!inquirerResponse.confirm) {
        console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    }
    else {
        console.log("Invalid Password"); 
    }
  });
