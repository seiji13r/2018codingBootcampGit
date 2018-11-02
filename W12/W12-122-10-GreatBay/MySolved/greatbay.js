var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "192.168.1.240",
    port: 3600,
    user: "myroot",
    password: "myroot",
    database: "greatbay_db"
});

itemsToArray();

inquirer.prompt([
    {
        type: "list",
        message: "What do you want to do?",
        name: "action",
        choices: ["POST ITEM", "BID ON ITEM"],
    }
]).then(function(inquirerResponse) {
    console.log(inquirerResponse)

    connection.connect(function(err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId);

        if (inquirerResponse.action === "POST ITEM") {

            inquirer.prompt([
                {
                    type: "input",
                    message: "What do you want to add?",
                    name: "name",
                },
                {
                    type: "list",
                    message: "What category does your item belong to?",
                    name: "category",
                    choices: ["item", "task", "jobs", "projects"]
                }
        ]).then(function(inquirerResponse) {
            console.log(inquirerResponse)
            postItem(inquirerResponse.name, inquirerResponse.category)
            connection.end();
        });
        } else if (inquirerResponse.action === "BID ON ITEM") {
            inquirer.prompt([
                {
                    type: "list",
                    message: "Which item id do you want make a bid for?",
                    name: "id",
                    choices: itemsToArray()
                },
                {
                    type: "input",
                    message: "How much do you want to bid?",
                    name: "bid",
                }
            ]).then(function(inquirerResponse) {
                console.log(inquirerResponse);
                bidItem(inquirerResponse.id, inquirerResponse.bid);
                connection.end();
            });
        }

    });
    console.log("just checking");
});

function postItem(name, category) {
    console.log("Inserting a new item...\n");
    var query = connection.query(
      "INSERT INTO stuff SET ?",
      {
        name: name,
        category: category
      },
      function(err, res) {
        console.log(res.affectedRows + " item inserted!\n");
      }
    );

    console.log(query.sql);
}

function itemsToArray() {
    var query = connection.query(
        "SELECT id, name FROM stuff",
        function(err, res) {
            // console.log(res)
            return res;
        }
    )
}

  function bidItem(id, bid) {

    console.log("...\n");
    var query = connection.query(
      "UPDATE stuff SET ? WHERE ?",
      [
        {
          currentBid: bid
        },
        {
          id: id
        }
      ],
      function(err, res) {
        console.log(res.affectedRows + " bid updated!\n");
      }
    );

    console.log(query.sql);
  }