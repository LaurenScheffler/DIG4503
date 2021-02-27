// creating a variable named Express that is requiring the use of express to work
const Express = require('express'); 
//created a variable named App with the value of Express that is stated in the line above
const App = Express();
//here is a specification of the port for the server to be run on 
const port = 3000; 
//this is stating for the server to get the directory and function with a request and a response
//the response is to our request of getting the server is to display Hello World
App.get('/', function(request, response){
  response.send("Hello world!");
});
//this is stating that by using the path /public to use the public folder in our directory 
App.use('/public', Express.static("public"));
//this is stating that while the server is running to listen on our stated port and for changes in our function
//once the server has listened to all of our code to console log the statement server running 
App.listen(port, function(){
  console.log("Server running!");
});