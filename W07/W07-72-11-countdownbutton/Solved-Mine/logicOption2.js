// Initialize Firebase (YOUR OWN APP)

// Initialize Firebase
// This is the code we copied and pasted from our app page
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBjQhy70Ko4GIqoCSyQ0_gNavxCssi2eYQ",
  authDomain: "myfirstfirebase01.firebaseapp.com",
  databaseURL: "https://myfirstfirebase01.firebaseio.com",
  projectId: "myfirstfirebase01",
  storageBucket: "myfirstfirebase01.appspot.com",
  messagingSenderId: "436110932680"
};
firebase.initializeApp(config);

// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

// --------------------------------------------------------------

// Bind the firebase Database into a variable.
var database = firebase.database();

// At the initial load, get a snapshot of the current data.
database.ref().on("value", function(snapshot) {
  console.log(snapshot.val());
  // $("#click-value").text(snapshot.val().clickCount);
  // clickCounter = snapshot.val().clickCount;
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// Print the initial data to the console.
console.log(clickCounter);

// Change the html to reflect the initial value.
$("#click-value").text(snapshot.val().clickCount);

// Change the clickCounter to match the data in the database
clickCounter = snapshot.val().clickCount;

// Log the value of the clickCounter
console.log(clickCounter)

// Change the HTML Value


// If any errors are experienced, log them to console.

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1


  // Alert User and reset the counter


  // Save new value to Firebase


  // Log the value of clickCounter


});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue


  // Save new value to Firebase


  // Log the value of clickCounter


  // Change the HTML Values

});
