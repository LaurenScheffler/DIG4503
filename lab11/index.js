//allows the use of mongodb 
import MongoClient from 'mongodb';
//provides credentials for proper use of mongodb
const URL = 'mongodb+srv://lscheffler:lwvGnFBj4NLKCC1y@cluster0.oewwc.mongodb.net/test';
//states intent to use mongodb and use the credentials provided above
MongoClient.connect(URL, {useUnifiedTopology: true})
//then once the connection is established do this
.then(connection => {
  //creates and defines the variable database as the sample airbnb data from the connection established
  let database = connection.db("sample_airbnb");
  //creates and defines the variable collection as the listingsAndReviews data from the sample airbnb data
  let collection = database.collection("listingsAndReviews");
  //creates and defines the variable cursor to "find" or filter through the data fitting the requirements for the ratings, beds, and prices 
  let cursor = collection.find({"review_scores.review_scores_rating": {$gte: 99}, beds: {$gte: 5}, price: {$lte: 200}});
  //once the information is found close the connection 
  cursor.forEach(document => {
    console.log(document.name);
  }, () => {
    connection.close();
  })
})
//if there is an error console log it in the terminal 
.catch(error => {
  console.log("Error: " + error);
})