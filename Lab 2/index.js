//This is telling the computer to use axios from node modules as the variable 'axios' so code on line 5 is properly read when executed
const axios = require('axios');

// Using axios, fetch the URL provided that is connected to a pokemon api
axios('https://pokeapi.co/api/v2/pokemon/rapidash')
    // And then do this with the data fetched from the URL provided above
    .then(function (response) {
        // Use the rapidash data to fill response parameter
        const pokemon = response.data;
        //As a response the data fetched will fill in the pokemon name and id from the specified pokemon in URL provided
        console.log("This is a " + pokemon.name + " and its ID is " + pokemon.id);
    })
    //If there is an issue with fetching data this will run  
    .catch(function (error) {
        //If error is detected then an error code will be displayed instead of the pokemon data
        console.log("Error: " + error);
    });