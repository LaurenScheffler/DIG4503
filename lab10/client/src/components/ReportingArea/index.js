import React from 'react'; 

class ReportingArea extends React.Component {
  render() {
    //ReportingArea will return as the html below to relay our search responses from NameSearch, AgeSearch, PositionSearch, and EmployeeSearch 
    return(
      <div>
        <h2 className="area">Search Results</h2>
        <div id="reportingArea"></div>
      </div>
    )
  }
}

export default ReportingArea; 