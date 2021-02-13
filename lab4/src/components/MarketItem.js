import React from 'react'; 

//this function named MarketItem will use props as a parameter
function MarketItem (props) {
  //MarketItem will return text with a counting feature using props to change the count
  return ( 
    <div>
      <p>MarketItem {props.count}</p>
    </div>
  );
};

//this allows other files to import MarketItem which will allow us to link code to identify and define parts of our MarketItem
export default MarketItem;