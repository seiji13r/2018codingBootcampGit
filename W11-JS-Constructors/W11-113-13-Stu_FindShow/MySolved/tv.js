

var request = require("request");

var fs = require("fs");

var TV = function() {
  this.findShow = function(show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    request(URL, function (error, response, body) {
      resultString = "";
      if (!error && response.statusCode == 200) {
        var showData = JSON.parse(body);
        // console.log(showData);

        resultString +=  "\nShow Name: " + showData.name + "\n";
        resultString +=  "Show Genre: " + showData.genre + "\n";
        resultString +=  "Show Rating Average: " + showData.rating.average + "\n";
        resultString +=  "Show Network Name: " + showData.network.name + "\n";
        resultString +=  "Show Summary: " + showData.summary + "\n";

        console.log(resultString);

        fs.appendFile('log.txt', resultString, (err) => {
          if (err) throw err;
          console.log('The "data to append" was appended to file!');
        });

      } else {
        console.log("Something Went Wrong!!!");
      }
    });
  };
};

module.exports = TV;
