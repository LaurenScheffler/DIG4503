import './App.css';
import HeaderArea from './components/Header';
import NameSearch from './components/NameSearch';
import AgeSearch from './components/AgeSearch';
import PositionSearch from './components/PositionSearch';
import EmployeeSearch from './components/EmployeeSearch';
import ReportingArea from './components/ReportingArea';

//Below places the react components from the components file within src within the function App to be exported into the index.js file located within the src folder as well to be displayed as the client 
function App() {
  return (
    <div className="App">
      <HeaderArea />
      <div className="row">
          <div className="column">
            <NameSearch />
          </div>
          <div className="column">
            <AgeSearch />
          </div>
          <div className="column">
            <PositionSearch />
          </div>
          <div className="column">
            <EmployeeSearch />
          </div>
      </div>
          <br></br>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
      <div className="Report">
        <ReportingArea />
      </div>
      <br></br>
      <br></br>
  </div>
  );
}

export default App;
