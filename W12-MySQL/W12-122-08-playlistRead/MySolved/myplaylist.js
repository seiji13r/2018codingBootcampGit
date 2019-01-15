var mysql = require("mysql");

// Capture the Column Name from Arguments
column = process.argv[2];
// console.log(column);

// Capture the Search String
search = process.argv.splice(3).join(" ");
// console.log(search);

var connection = mysql.createConnection({
  host: "192.168.1.240",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "myroot",

  // Your password
  password: "myroot",
  database: "playlist_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  // afterConnection();
  // console.log("\n");
  // q1 = "SELECT * FROM songs";
  // q2 = "SELECT * FROM songs WHERE artist = 'Jamiroquai'";
  // q2 = "SELECT * FROM songs WHERE genre = 'Rock'";
  // q2 = "SELECT * FROM songs WHERE genre = 'Pop'";
  // if(column==undefined){
  //   afterConnection(q1);
  // } else {
  //   myQuery = "SELECT * FROM songs WHERE " + column + " = '" + search + "'";
  //   afterConnection(myQuery);
  // }
  
  createSong();

  console.log("\n");
});


// function afterConnection(query_str) {
//   connection.query(query_str, function(err, res) {
//     if (err) throw err;
//     console.log(res);
//     connection.end();
//   });
// }


function createSong() {
  console.log("Inserting a new song...\n");
  var query = connection.query(
    "INSERT INTO songs SET ?",
    {
      title: "Bohemian Rhapsody",
      artist: "Queen",
      genre: "Rock"
    },
    function(err, res) {
      console.log(res.affectedRows + " song inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      updateSong();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function updateSong() {
  console.log("Updating all Pop to R&B...\n");
  var query = connection.query(
    "UPDATE songs SET ? WHERE ?",
    [
      {
        genre: "R&B"
      },
      {
        genre: "Pop"
      }
    ],
    function(err, res) {
      console.log(res.affectedRows + " songs updated!\n");
      // Call deleteSong AFTER the UPDATE completes
      deleteSong();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function deleteSong() {
  console.log("Deleting all Acid Jazz songs...\n");
  connection.query(
    "DELETE FROM songs WHERE ?",
    {
      genre: "Acid Jazz"
    },
    function(err, res) {
      console.log(res.affectedRows + " songs deleted!\n");
      // Call readProducts AFTER the DELETE completes
      readSongs();
    }
  );
}

function readSongs() {
  console.log("Selecting all songs...\n");
  connection.query("SELECT * FROM songs", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}
