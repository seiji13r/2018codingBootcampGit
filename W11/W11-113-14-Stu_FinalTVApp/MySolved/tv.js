var request = require("request");
var fs = require("fs");

// Create the TV constructor
var TV = function() {
  // divider will be used as a spacer between the tv data we print in log.txt
  var divider =
    "\n------------------------------------------------------------\n\n";

  // findShow takes in the name of a tv show and searches the tvmaze API
  this.findShow = function(show) {
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    request(URL, function(err, response, body) {
      // parse the response body (string) to a JSON object
      var jsonData = JSON.parse(body);

      // showData ends up being the string containing the show data we will print to the console
      var showData = [
        "Show: " + jsonData.name,
        "Genre(s): " + jsonData.genres.join(", "),
        "Rating: " + jsonData.rating.average,
        "Network: " + jsonData.network.name,
        "Summary: " + jsonData.summary
      ].join("\n\n");

      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("log.txt", showData + divider, function(err) {
        if (err) throw err;
        console.log(showData);
      });
    });
  };

  this.findActor = function(actor) {
    // divider will be used as a spacer between the tv data we print in log.txt
    var divider =
    "\n------------------------------------------------------------\n\n";

    var URL = "http://api.tvmaze.com/search/people?q=" + actor;

    // Add code to search the TVMaze API for the given actor
    // The API will return an array containing multiple actors, just grab the first result
    // Append the actor's name, birthday, gender, country, and URL to the `log.txt` file
    // Print this information to the console
    request(URL, function(err, response, body) {
      // parse the response body (string) to a JSON object
      var jsonData = JSON.parse(body);

      var actorData = jsonData;
      // actorData ends up being the string containing the show data we will print to the console
      var actorData = [
        "Name: " + jsonData[0].person.name,
        "Score: " + jsonData[0].score,
        "Birthday: " + jsonData[0].person.birthday,
        "Gender: " + jsonData[0].person.gender,
        "Country: " + jsonData[0].person.country.name,
        "URL: " + jsonData[0].person.url,
      ].join("\n");

      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("log.txt", actorData + divider, function(err) {
        if (err) throw err;
        console.log(actorData);
      });
    });
  };
};

module.exports = TV;
