//including the usage of Express so my code my function properly
import Express from 'express';
//creating a variable named App with the value of a function named Express which will use what is imported above
const App = Express();
//creating a port and defining the port number the server will be run on as 45030 
const port = 45030;
//an array named names 
const names = [
  'Cortney',
  'Dewayne',
  'Trenton',
  'Pamala',
  'Ettie',
  'Errol',
  'Lorrie',
  'Hang',
  'Lauryn',
  'Caterina',
  'Isa',
  'Marcela'
];
//stating for Express which is being called App to obtain the url ending in /people/:person with person being a name 
App.get('/people/:person', (req, res) => {
  //defining person from the url path above
  let person = req.params.person;
  //stating if our array names includes the name in our url path then respond {name: *name we provided in the url path*}
  if (names.includes(person)){
    res.json({name: person});
    //stating if our array does not include the name from our url path then respond {name: "not found"}
  } else {
    res.json({name: "not found"});
  }
});
//stating for Express which is being called App to obtain the url ending in /search/:name with name being a letter/letters/name
App.get('/search/:name', (req, res) => {
  //defining name from the url path above
  let name = req.params.name; 
  //creating a variable named result with the value of filtering our array 
  //names our array is filtered by seeing if our url path includes anything from our array 
  const result = names.filter(str => str.includes(req.params.name));
  //if our result is not equal to zero then display the result of our search
  if (result != 0) {
    res.json({ search: result});
    //if our search came up with nothing meaning our result equals zero then displays {search: "not found"}
  } else { 
    res.json({ search: "not found"}); 
  }
});
//tells Express which is being called App to listen on the port the we defined on line 6 
App.listen(port, () => {

});