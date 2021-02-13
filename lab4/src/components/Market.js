import React, {Component} from 'react';
import MarketItem from './MarketItem';

//this class allows us to pass the information within this class to our elements
class Market extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0
    };
  };


  //this incorporates new information in defining value when counting and adds a button with an onClick to change our count 
  render() {
    return(
      <div>
        <MarketItem count={this.state.count}/>
        <button onClick={() => this.setState({count: this.state.count +1})}>Add a MarketItem</button>
      </div>
    );
  };
};

//this export allows us to import the information from this document into other files 
export default Market;