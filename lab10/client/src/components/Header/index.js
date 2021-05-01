import React from 'react'; 

class HeaderArea extends React.Component {
  render() {
    //HeaderArea will return the main title heading along with the corresponding instructions to the page's functions. 
    return(
      <div>
        <br></br>
        <br></br>
        <h1>Employee Database</h1>
        <p className="add">Below you can search through the current employees based on their name, age, position, and identification! Your search results will display towards the bottom of the page within the Search Results section.</p>
        <br></br>
        <hr></hr>
      </div>
    )
  }
}

export default HeaderArea; 