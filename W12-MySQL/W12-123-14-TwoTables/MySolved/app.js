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
    
        var query="SELECT Top5000.rank AS song_rank, Top5000.artist,Top5000.song, albums.title AS album_name, Top5000.year  FROM Top5000 INNER JOIN albums ON Top5000.artist=albums.artist WHERE (Top5000.year=albums.year)&&(Top5000.?)";
        connection.query(query,{artist:res.userInput},function(err,res){
            // console.log(res);
            printTable(res);

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