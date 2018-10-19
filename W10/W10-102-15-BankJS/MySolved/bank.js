var fs = require("fs");

var command = process.argv[2];
var number = process.argv[3];

var price = 1000;

function checkTotal(){
    
}

switch(command){
    case "total":
        fs.readFile("bank.txt", "utf8", (err, data) => {
            if(err){
                return console.log(err);
            }
            // Convert Data tring to Array;
            var movements = data.split(", ");
            // Initialize Total to 0
            var total = 0;
            for (var i = 0; i < movements.length; i++ ){
                total += parseFloat(movements[i]);
            }
            // Return Total
            return console.log(total);
        });
    break;

    case "deposit":
        fs.appendFile("bank.txt", ", " + number, (err) => {
            if(err){
                return console.log(err);
            }
        });
    
    break;
    case "withdraw":
        fs.appendFile("bank.txt", ", -" + number, (err) => {
            if(err){
                return console.log(err);
            }
        });
    break;
    case "lotto":
        fs.appendFile("bank.txt", ", -5", (err) => {
            if(err){
                return console.log(err);
            }
        });

        var randNum = Math.floor(Math.random()*10);

        if(number==randNum){
            console.log("You Won!!!");
            console.log("Your Choice was: " + number + " The Lotto Number was: " + randNum);
            
            fs.appendFile("bank.txt", ", " + price, (err) => {
                if(err){
                    return console.log(err);
                }
            });
        } else {
            console.log("You Lose!!!");
            console.log("Your Choice was: " + number + " The Lotto Number was: " + randNum);
        }
    break;
    default:
        return console.log("Somthing went worng");
}
