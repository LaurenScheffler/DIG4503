import React from 'react'; 

class PositionSearch extends React.Component {
  readPosition(event) {
    //stops any initial steps and functions exactly as the code states
    event.preventDefault(); 
    //creates a variable named element and selects the id name from the html below
    let element = document.querySelector("#position");
    //obtains the path /employees/ followed by our variable element's value which is the id name 
    fetch("/employees/positions/" + element.value)
    //then to return the response as json
    .then((res) => {
      return res.json();
    })
    //then take the processed data from the id name in our html 
    .then((processed) => {
      //create variable named reporting and selects the id reportingArea from the html below (basically selects the reporting area)
      let reporting = document.querySelector("#reportingArea");
      //if the processed data from #name returned an error then display the error in the html of reporting area 
      if(processed.error) { 
        reporting.innerHTML = processed.error;
        //if the processed data did not return an error then display the name and age belonging to the position input 
      } else {
        reporting.innerHTML = processed.name;
      }
    });
    //this defines element.value within line 10
    element.value = ""; 
  }
  render() {
    //PositionSearch displays as the html below and has the funtion above within the html form below 
    return(
      <div>
        <h2>Position</h2>
        <form onSubmit={this.readPosition}>
          <input id="position" type="text"/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default PositionSearch;