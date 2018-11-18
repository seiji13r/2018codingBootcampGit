var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectColumn: function(colInput, tableInput) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [colInput, tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectAndOrder: function(whatToSelect, table, orderCol) {
    var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    var queryString =
      "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

    connection.query(
      queryString,
      [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  },
  leftJoin: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
    var queryString =
      "SELECT clients.id, clients.client_name, parties.party_name FROM clients LEFT JOIN parties ON parties.client_id = clients.id;"
    connection.query(
      queryString,
      [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;
