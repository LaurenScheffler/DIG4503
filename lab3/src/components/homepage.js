import React from 'react';
import './App.css';

class HomePage extends React.Component { 

  render(fname) { 
    return <body><h1>Hello, {this.props.firstName}</h1></body>; 
  }
}

export default HomePage; 