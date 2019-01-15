// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT1 = 7500;

var PORT2 = 7000;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {
  console.log(request.socket);
  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
  response.end("It Works!! Path Hit: " + request.socket.localPort);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequest);

var server2 = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server1.listen(PORT1, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT1);
});

// Start our server so that it can begin listening to client requests.
server2.listen(PORT2, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT2);
});


http.createServer(function(request, response){
  console.log(request.url);
  console.log(request.socket.localPort);
  response.end("It Works!! Path Hit: " + request.url);
}).listen(9090,function(){
  console.log("Server listening on: http://localhost:" + 9090);
});