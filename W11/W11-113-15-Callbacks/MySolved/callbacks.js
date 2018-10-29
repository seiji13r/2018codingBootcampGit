var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.

// Write a function that runs a function argument if
// its other argument is truthy.

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?

/* 

# **Instructions**

* Write a function that accepts a string and a function as arguments. It should log the string, and then run the function.
*/
console.log("Func1\n==========\n");
function func1(text, myFunc){
   console.log(text);
   myFunc();
}

func1("Hello World", function(){console.log("Loggin the Callback")});

/*
* Write a function that accepts a boolean value and a function as arguments. It should run the function if and only if the boolean argument is true.
*/
console.log("Func2\n==========\n");
function func2(boolValue, cFunc){
  if (boolValue===true){
    cFunc();
  }
}

func2(false, function(){ console.log("Printing Message in func2");});
func2(true, function(){ console.log("Printing Message in func2");});

/*
* Write a function that accepts a function(F) and a value (V), and returns a function that returns the result of running F on V. This sounds tricky, but it's easier than it sounds—just take it step by step!
*/

console.log("Func3\n==========\n")
function func3(F, V){
  return F(V());
}

func3(function(r){console.log(r)}, function(){return 3*3;})

/*
* Finally, write a short message to a file using `fs.writeFile`. Does this function use callbacks? If so, identify them.
*/

console.log("Func4\n==========\n")
fs.writeFile('file.txt', "Hello World!!!", function(err){
  if (err) throw err;
  console.log('The file has been saved!');
});