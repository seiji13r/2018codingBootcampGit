var mysql = require("mysql");

column = process.argv[2];
search = process.argv.splice(3).join(" ");

console.log(column);

console.log(search);

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
  q1 = "SELECT * FROM songs";
  // q2 = "SELECT * FROM songs WHERE artist = 'Jamiroquai'";
  // q2 = "SELECT * FROM songs WHERE genre = 'Rock'";
  // q2 = "SELECT * FROM songs WHERE genre = 'Pop'";
  if(column==undefined){
    afterConnection(q1);
  } else {
    myQuery = "SELECT * FROM songs WHERE " + column + " = '" + search + "'";
    afterConnection(myQuery);
  }
  
  console.log("\n");
});


function afterConnection(query_str) {
  connection.query(query_str, function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}