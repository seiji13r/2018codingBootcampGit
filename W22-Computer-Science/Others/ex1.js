const stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];

const random_value = stuff[ Math.floor( Math.random() * 14 ) ];

for(let i = 0; i < stuff.length ; i++){
  if (stuff[i] == random_value){
    console.log("Element", i, "is equal to random", random_value);
  }
  else{
    console.log("Element", i, "is not equal to random", random_value);
  }
}