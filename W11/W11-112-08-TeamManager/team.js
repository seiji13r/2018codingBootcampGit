
/* 
# **Instructions**

* Over the course of this assignment you are going to put together a function which uses constructors and user input to create and manage a team of players.

* Start out by creating a constructor function called "Player" with the following properties and methods...

  * `name`: Property which contains the player's name
  * `position`: Property which holds the player's position
  * `offense`: Property which is a value between 1 and 10 to show how good this player is on offense
  * `defense`: Property which is a value between 1 and 10 to show how good this player is on defense
  * `goodGame`: Method which increases either the player's offense or defense property based upon a coinflip.
  * `badGame`: Method which decreases either the player's offense or defense property based upon a coinflip.
  * `printStats`: Method which prints all of the player's properties to the screen
*/

var inquirer = require("inquirer");

// Create the Constructor
function Player(name, position, offense, defense){
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;
  // Methods
  this.goodGame = function(){
    var coinflip = Math.floor(Math.random()*2);
    if(coinflip===0){
      this.offense++;
    }else{
      this.defense++;
    }
  }
  this.badGame = function(){
    var coinflip = Math.floor(Math.random()*2);
    if(coinflip===0){
      this.offense--;
    }else{
      this.defense--;
    }
  }
  this.printStats = function(){
    var stats = "";
    stats += "Name: " + this.name + "\n";
    stats += "Position: " + this.position + "\n";
    stats += "Offense: " + this.offense + "\n";
    stats += "Defense: " + this.defense + "\n";
    console.log(stats);
  }
}

/*
* Now create a program which allows the user to create 3 unique players; 2 starters and a sub. It should take as user input the name, position, offense, and defense of each player.

* Once all of the players have been created, print their stats.

*/
var count = 0;
// array in which we will store each of our new players objects
var playersArray = [];

var createPlayer = function() {
  if (count < 3){

    inquirer.prompt([
      {
        name: "name",
        message: "What is the Player name?"
      }, {
        name: "position",
        message: "What is the Player position?"
      }, {
        name: "offense",
        message: "What is the Player offense?"
      }, {
        name: "defense",
        message: "What is the Player defense?"
      }
    ]).then(function(answers) {
      var newPlayer = new Player(
        answers.name,
        answers.position,
        answers.offense,
        answers.defense
      );

      // Increase Counter
      count++;
      // Print Player Stats
      newPlayer.printStats();
      // Add To Players Array
      playersArray.push(newPlayer);
      // Recursivity Starts Here
      createPlayer();

    });
  } 
  else {
    for(let i = 0; i < playersArray.length; i++){
      playersArray[i].printStats();
    }
  }
};

createPlayer();

/*
* Once your code is functioning properly, move on to create a function called "playGame" which will be run after all of the players have been created and will do the following:

  * Run 5 times. Each time the function runs:
    * Two random numbers between 1 and 20 are rolled and compared against the starters' offensive and defensive stats
      * If the first number is lower than the sum of the team's offensive stat, add one point to the team's score.
      * If the second number is higher than the sum of the team's defensive stat, remove one point from the team's score.
    * After the score has been changed, prompt the user to allow them to substitute 1 player from within the starters array with the player from within the subs array.
  * After the game has finished (been run 5 times):
    * If the score is positive, run `goodGame` for all of the players currently within the starters array.
    * If the score is negative, run `badGame` for all of the players currently within the starters array.
    * If the score is equal to zero, do nothing with the starters.
    * Give the user a message about if they won, and the status of their starters.
    * After printing the results, ask the user if they would like to play again.
      * Run `playGame` from the start once more if they do.
      * End the program if they don't.

* HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.

* HINT: It has been a while since we have worked with random numbers explicitly. If you are having troubles, look up Math.random on Google and you should find some resources to help.

*/

let teamScore = 0;

function playGame(){
  var randNum1 = Math.floor(Math.random()*20+1);
  var randNum2 = Math.floor(Math.random()*20+1);

  var teamTotalOffence = playersArray[0].offense + playersArray[1].offense;
  var teamTotalDefense = playersArray[0].defense + playersArray[1].defense;

  if(randNum1 < teamTotalOffence){
    teamScore++;
  }

  if(randNum2 > teamTotalDefense){
    teamScore--;
  }
}

for (let i = 0; i < 5; i++){
  playGame();
}
