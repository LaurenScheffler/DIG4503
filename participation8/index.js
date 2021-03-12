//stating my usage of Express so that my code may function properly where express is used 
import Express from 'express';
//creating a variable named App and giving it the value of a function named Express which uses what we imported above
const App = Express(); 
//creating a port and defining the port number the server will be run on as 3782
const port = 3782; 
//stating for Express which is being called App to obtain the url ending in /friends/:name 
App.get('/friends/:name', (req, res) => {
  //once obtained this response will be sent to the server 
  res.send("Hello," + req.params.name + ". Have a great day!");

});
//stating for Express which is being called App to obtain the url ending in /friends/meeting/:goodbye
App.get('/friends/meeting/:goodbye', (req, res) => {
  //once obtained this response will be sent to the server in json formatting
  res.json({ Goodbye: req.params.goodbye});

});
//tells Express which is being called App to listen on the port the we defined on line 6 
App.listen(port, () => {

});