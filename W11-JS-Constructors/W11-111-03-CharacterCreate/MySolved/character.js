/*
# **Instructions**
* Over the course of this activity you are going to be using constructors to create simplistic characters for use within a very basic Roleplaying Game (RPG)
* Each character created using your constructor should have the following properties...
  * Name: The character's name --> String
  * Profession: What the character does for a living --> String
  * Gender: The character's gender --> String
  * Age: The character's age --> Integer
  * Strength: Abstraction for how strong the character is --> Integer
  * HitPoints (HP): Abstraction for how much health the character has --> Integer
  * PrintStats: Function which prints all of a character's properties to the screen
  * Once you have created your constructor, create two new characters and print their properties to the screen
  * Fool around and get comfortable with your constructor before moving onto the next parts of the activity

* Now that you feel comfortable with your constructor, it is time to start making this character creation system a little more reactive by adding in some more methods...
  * IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.
  * Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.
  * LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.

* BONUS: After completing the previous sections and making sure they work, you now have everything you need to create a very basic RPG where two characters fight one another. Don't worry if you cannot finish this part of the activity as, by completing the above sections you are well on your way to mastering constructors!

*/
function Character(name, profession, gender, age, strength, hp) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age;
  this.strength = strength;
  this.hp = hp;
  this.printStats = function() {
      console.log("\nName: " + this.name +
                  "\nProfession: " + this.profession +
                  "\nGender: " + this.gender +
                  "\nAge: " + this.age +
                  "\nStrength: " + this.strength +
                  "\nHP: " + this.hp + "\n" +
                  "\n=============================")
  };
  this.isAlive = function() {
      if (this.hp > 0) {
          console.log("\n" + this.name + ": Alive, he is\n" +
          "\n=============================");
          return true;
      } else {
          console.log("\n" + this.name + ": Dead, he is\n" +
          "\n=============================");
          return false;
      }
  };
  this.attack = function(character2) {
      character2.hp -= this.strength;
  };
  this.levelUp = function() {
      console.log("\n" + this.name + " leveled up!\n" +
      "\n=============================");
      this.age += 1;
      this.hp += 25;
      this.strength += 5;
  };
}

var seiji = new Character("seiji", "galán de alberca", "male", 25, 9001, 500);
var felix = new Character("felix", "galán de piscina", "male", 20, 15000, 100);

seiji.printStats();
felix.printStats();

seiji.attack(felix);
felix.isAlive();
felix.printStats();
seiji.levelUp();
seiji.printStats();