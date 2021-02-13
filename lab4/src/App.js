import React from 'react';
//importing Market is allowing us to use Market as an element within our function to display our code from the components folder to properly run our code
import Market from './components/Market';

//this function is saying to return our component Market which will run all of our code from our components folder
function App() {
  return (
    <Market/>
  );
};

export default App;
