// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

/* 

# CLI

In this activity we will write the CLI portion of the TV Search application.

## Instructions

* When the completed `cli.js` file is run with node, it should be able to handle command line arguments similar to those below:

  ```
  // Search for The Andy Griffith Show

  node cli show The Andy Griffith Show
  ```

  and

  ```
  // Search for the actor Andy Griffith

  node cli actor Andy Griffith
  ```

* In these examples the cli expects input in the following format:

  ```
  node cli <show-or-actor> <actor-or-show-name>
  ```

![TV App Example](Unsolved/01-TV-App-Example.gif)

* To begin, open [cli.js](Unsolved/cli.js) and write code to store the `<show-or-actor>` command line argument in a variable named `search`.

* Store the `<actor-or-show-name>` command line argument in a variable named `term`. Keep in mind that this argument may contain spaces so it may span multiple indexes of `process.argv`. Check out the [Array Slice Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) to achieve this.

* Then write an if/else statement to print to the console whether a show or actor is being searched for.

* We will add some functionality to actually perform the API calls in the next activity.

### Bonus

* Write logic to set up a default search type and default term if either are missing.


*/

// node cli actor [Actor]

var search;
var term;

search = process.argv[2];
term = process.argv[3];

function searchShow(showName){
  if(showName===undefined){
    // Default Behavior
    console.log("Default!!");
  }
  console.log("Show Result!! " + showName);
  return true;
}

function searchActor(actorName){
  if(actorName===undefined){
    // Default Behavior
    console.log("Default!!");
  }
  console.log("Show Actor!! " + actorName);
  return true;
}



if(search=="show"){
  searchShow(term);
}
else if (search=="actor"){
  searchActor(term);
} else {
  console.log("Option invalid: Try Again!!!");
}


