// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    db.Todo.findAll({}).then(function(result){
      res.json(result);
    });
    // back to the user
  });

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/api/todos", function(req, res) {
    // Write code here to create a new todo and save it to the database
    var todo = req.body;
    db.Todo.create({
      text: todo.text,
      complete: todo.complete
    }).then(function(result){
      res.json(result);
    });
    // and then res.json back the new todo to the user

  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {

  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", function(req, res) {

  });
};


// Character.findAll({where:{routeName:req.params.characters}}).then(function(results) {
//   // results are available to us inside the .then
//   res.json(results[0]);
// });