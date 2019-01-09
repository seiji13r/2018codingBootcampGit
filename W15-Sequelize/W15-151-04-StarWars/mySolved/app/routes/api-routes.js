// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Character = require("../models/character.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters", function(req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.characters) {

      // Then display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      Character.findAll({where:{routeName:req.params.characters}}).then(function(results) {
        // results are available to us inside the .then
        res.json(results[0]);
      });
    }

    // Otherwise...
    else {
      // Otherwise display the data for all of the characters.
      // (Note how we're using the ORM here to run our searches)
      Character.findAll({}).then(function(results) {
        // results are available to us inside the .then
        res.json(results);
      });
    }

  });

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/all", function(req, res) {
      // (Note how we're using the ORM here to run our searches)
      Character.findAll({}).then(function(results) {
        // results are available to us inside the .then
        res.json(results);
      });

  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {

    // Take the request...
    // var character = req.body;

    console.log("Character Data:");
    console.log(req.body);

    Character.create({
      routeName: req.body.name.replace(/\s+/g, "").toLowerCase(),
      name: req.body.name,
      role: req.body.role,
      age: req.body.age,
      forcePoints: req.body.forcePoints
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });
};
