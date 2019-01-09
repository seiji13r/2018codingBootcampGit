// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/chirps", function(req, res){
    connection.query("SELECT * FROM chirps", function(err, response){
      if(err) throw err;
      res.json(response);
    })
  });

  // Add a chirp
  app.post()

};
