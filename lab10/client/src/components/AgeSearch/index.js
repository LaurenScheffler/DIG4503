import React from 'react'; 

class AgeSearch extends React.Component {
  readAge(event) {
    //stops any initial steps and functions exactly as the code states
    event.preventDefault();
    //creates a variable named element and selects the id age from the html below
    let element = document.querySelector("#age");
    //obtains the path /ages/ followed by our variable element's value which is the id age
    fetch("/ages/" + element.value) 
    //then to return the response as json
    .then((res) => {
      return res.json(); 
    })
    //then take the processed data from the id age in our html
    .then((processed) => {
      //creates a variable named reporting that selects the id reportingArea from the html below (basically selects the reporting area)
      let reporting = document.querySelector("#reportingArea");
      //if the processed data from #age returned an error then display the error in the html of the reporting area
      if(processed.error) {
        reporting.innerHTML = processed.error;
        //if the processed data did not return an error then display the name belonging to the age input 
      } else {
        reporting.innerHTML = processed.name; 
      }
    });
    element.value = "";
  }
  render() {
    return(
      <div>
        <h2>Age</h2>
        <form onSubmit={this.readAge}>
           <input id="age" type="text"/>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AgeSearch;