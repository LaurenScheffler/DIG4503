import React from 'react';
//importing Posts is allowing us to use the code I wrote in post.js within the components folder
import Posts from './components/Posts';

//this function is stating to return the output from Posts 
function App() {
  return (
    <Posts/>
  );
}
//this export is being used in the index.js file 
export default App;
