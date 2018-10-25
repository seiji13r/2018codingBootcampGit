
// # **Instructions**

// * Make a dogs object with three keys...

//   * First key called "raining" with a value of true

// * Second key called "noise" with a value of "Woof!"

// * Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining dogs

// * Make a cats object with three keys...

//   * First key called "raining" with a value of false

//   * Second key called "noise" with a value of "Meow!"

//   * Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining cats

// * Make the dog bark

// * Make the cat meow

// * BONUS: Create a function called "massHysteria" which takes in both the cats and the dogs object and prints "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!" if both of the `raining` keys are equal to true.

// * BONUS: Look to see if you can find any means to simplify your code further and further

console.log("We just Start the Program");

var dogs = {
  raining: true,
  noise: "Woof!",
  makeNoise: function(){
    if(this.raining){
      console.log(this.noise)
    }
  }
}

var cats = {
  raining: false,
  noise: "Meow!",
  makeNoise: function(){
    if(this.raining){
      console.log(this.noise)
    }
  }
}

function massHysteria(someCats,someDogs){
  if((someCats.raining===true) && (someDogs.raining===true)){
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  } else {
    console.log("MASS HYSTERIA DIDN't HAPPEN");
  }
};

console.log("\nDogs Barking!!");
dogs.makeNoise();

console.log("\nCats Meowing!!")
cats.makeNoise();

console.log("\nMass Histeria Invoqued");
massHysteria(cats, dogs);

console.log("\nChange raining to true in Cats and Dogs");
cats.raining = true;
dogs.raining = true;

console.log("\nMass Histeria Invoqued Again");
massHysteria(cats, dogs);

console.log("\n")