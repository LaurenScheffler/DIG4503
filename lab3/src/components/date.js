import React from 'react';
import './App.css';

class Date extends React.Component { 

  render(tdate){
    return <body><div id="id2" ><h2>Today's Date:</h2><h1>{this.props.theDate}</h1></div></body>; 
  }
}

export default Date; 