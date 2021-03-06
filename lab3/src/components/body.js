import React from 'react';
import './App.css';

class Body extends React.Component { 

  render(myList){
    return <body><div id="id" ><h2>Here is your to-do list:</h2><li>{this.props.list}</li></div></body>; 
  }
}

export default Body; 