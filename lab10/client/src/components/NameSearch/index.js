import React from 'react'; 

class NameSearch extends React.Component {
  readName(event) {
    //stops any initial steps and functions exactly as the code states
    event.preventDefault(); 
    //creates a variable named element and selects the id name from the html below
    let element = document.querySelector("#name");
    //obtains the path /employees/ followed by our variable element's value which is the id name 
    fetch("/employees/" + element.value)
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
        //if the processed data did not return an error then display the age belonging to the name input 
      } else {
        reporting.innerHTML = processed.age; 
      }
    });
    //this defines element.value within line 10
    element.value = ""; 
  }
  render() {
    //NameSearch displays as the html below and has the funtion above within the html form below 
    return(
      <div>
        <h2>Name</h2>
        <form onSubmit={this.readName}>
          <input id="name" type="text"/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default NameSearch;