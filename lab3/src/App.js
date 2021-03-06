import React from 'react';
import HomePage from './components/homepage';
import Body from './components/body';
import Date from './components/date'

function App() {
  const fname = 'Lauren';
  const myList = ['homework'];
  const tdate = "3/5/2021";
  return (
    <div>

    <HomePage firstName={fname} />
    <Date theDate={tdate} />
    <Body list={myList} />

    </div>
  )
}

export default App;
