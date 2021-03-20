//including the usage of Express so my code may function properly
import Express from "express";
//including the usage of fs so my code may incorporate database.json properly
import fs from "fs";
//creating a variable named App with the value of a function named Express which will use what is imported above
const App = Express(); 
//creating a port and defining the port number the server will be run on as 3010
const port = 3010; 
//creating a variable named fileContents which will allow my code to read the contents of database.json
let fileContents = fs.readFileSync("database.json");
//creating a varaible named database that will allow the fileContents from the line above to be written in json on the server
let database = JSON.parse(fileContents);
//stating for Express which is being called App to obtain the url ending in /employees/:name with name being a name from our database file
App.get('/employees/:name', (req, res) => {
  //creating a variable named result the value of our error code
  let result = {"error": "not found"};
  //stating that for each value from our database file if the request within our url path matches the value of a name 
  database.forEach((value) => {
    if(req.params.name == value.name) {
      //then result will equal the value of the name 
      result = value;
    }
  });
  //our response to the server will be written in json and will be our result
  res.json(result);
})
//stating for Express which is being called App to obtain the url ending in /ages/:number with number being an age from our database file
App.get('/ages/:number', (req,res) => {
  //creating a variable named result the value of our error code 
  let result = {"error": "not found"};
  //stating that for each value from our database file 
  database.forEach((value) => {
    //if the request within our url path matches the value of an age from our databse
    if(req.params.number == value.age) {
      //then result will equal the value of an age of an employee
      result = value;
    }
  });
//our response to the server will be written in json and will be our result
  res.json(result);
})
//tells Express which is being called App to listen on the port the we defined on line 8 
App.listen(port, () => {
  //once the server is running this console log will print in the terminal stating our server is running
  console.log("Server running!");
})