import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
function App() {

  const [counter, setCounter] = useState(1);
  const [maxValue, setMaxValue] = useState(1000);

   const increment = () => {
    if (counter<maxValue )
     setCounter(counter + 1)
   }
   
   const decrement = () => {
     setCounter(counter - 1)
   }

   const handleInputChange =(e) =>{
     let value = parseInt(e.target.value);
       setCounter(value);
   }

  return (
    <div className="outer-container">
        <button  className="box-first" onClick={decrement}>-</button>
        <input type ="number" min="1" max="1000" className="box-second" onChange={handleInputChange} value={counter}/>
        <button className="box-third" onClick={increment}>+</button>
        </div>
  );
}

export default App;
