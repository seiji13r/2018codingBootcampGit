var stuffIneed = require("./bands.js");

var genre = process.argv[2];

if (genre){
    if(stuffIneed.genres[genre]){
        console.log("A " + genre + " band is " + stuffIneed.genres[genre]);
    } else {
        console.log("There are no Group in the Genre: " + genre);
        console.log("These are the ones:")
        for (key in stuffIneed.genres){
            console.log("A " + key + " band is " + stuffIneed.genres[key]);
        }
    }
    
} else {
    for (key in stuffIneed.genres){
        console.log("A " + key + " band is " + stuffIneed.genres[key]);
    }
}