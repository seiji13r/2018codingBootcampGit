var express = require("express");

var app = express();
var PORT = 3000;

// Sets up the Static Folder
app.use(express.static("public"));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "192.168.1.240",
  port: 3306,
  user: "myroot",
  password: "myroot",
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Serve index.handlebars to the root route, populated with all quote data.
app.get("/", function(req, res) {
  connection.query("SELECT * FROM quotes", function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    res.render("index", { quotes: data });
  });
});

// Serve single-quote.handlebars, populated with data that corresponds to the ID in the route URL.
app.get("/:id", function(req, res) {
  connection.query("SELECT * FROM quotes WHERE ?", {id: req.params.id}, function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    res.render("single-quote", data[0]);
  });
});

// Create a new quote using the data posted from the front-end.
app.post("/api/quotes", function(req, res) {
  connection.query("INSERT INTO quotes (author, quote) VALUES (?,?)", [req.body.author, req.body.quote], function(err, result) {
    if (err) {
      return res.status(500).end();
    }
    res.json({id: result.insertId});
  });
});

// Delete a quote based off of the ID in the route URL.
app.delete("/api/quotes/:id", function(req, res) {
  // DELETE FROM quotes WHERE id =
  //  if result.affectedRows === 0 send 500
  // if success res.status(200).end()
});

// Update a quote.
app.put("/api/quotes/:id", function(req, res) {
  // DELETE FROM quotes WHERE id =
  // if err send 500
  // if result.changedRows === 0 send 404
  // res.status(200).end()
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
