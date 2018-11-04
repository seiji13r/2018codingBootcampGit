var mysql=require("mysql");
var inquirer=require("inquirer");
var Table=require("cli-table3");

var connection=mysql.createConnection({

    host:"192.168.1.240",
    port: 3306,
    user:"myroot",
    password:"myroot",
    database:"topsongs_db"
});

connection.connect(function(err){
if(err)throw err; 
inquire();
});

function inquire(){
    inquirer.prompt([{
        type:"input",
        name:"userInput",
        message:"What artist do you want to look for?: ",
        
    }]).then(function(res){
    
        var query="SELECT top5000.rank AS song_rank, top5000.artist,top5000.song, albums.title AS album_name, top5000.year  FROM top5000 INNER JOIN albums ON top5000.artist=albums.artist WHERE (top5000.year=albums.year)&&(top5000.?)";
        connection.query(query,{artist:res.userInput},function(err,res){
            console.log(res);
            // printTable(res);

        });
        connection.end();
    });
    
    }

    function printTable(rows) {
        const headers = ["Song", "Album", "Year","Song Rank"];
        let table = new Table({
          head: headers
        });
      
        rows.forEach(row => {
          table.push([row.song, row.album_name, row.year,row.song_rank]);
        });
      
        console.log(table.toString());
      }