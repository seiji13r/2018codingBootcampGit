var http = require("http");

var PORT = 8080;

function handleRequest(request, response){
  response.end("It works! URL: " + request.URL);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log("server listening on port " + PORT);
});

// Require http module
// Define the PORT
// handleRequest