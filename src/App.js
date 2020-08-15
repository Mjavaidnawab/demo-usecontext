import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';

function App() {
  let [number, setNumber] = useState(45);

  return (
    <div> Hello World from App Class 5
    <Parent num = { number }></Parent>
    <button onClick = {()=> setNumber(++number)}>Update number </button>
    </div>
  );
}

export default App;
