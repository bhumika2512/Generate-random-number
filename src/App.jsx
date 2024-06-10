import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [randomNumber, setRandomNumber] = useState(null);
  
  const generaterandomnumber = () =>{
    const min = parseInt(minValue)
    const max =parseInt(maxValue)
    if(!isNaN(min) && !isNaN(max) && min<max){
      const random=Math.floor((Math.random()*(max-min+1))+min)
      setRandomNumber(random)
    }
    else{
      alert('please enter valid min and max')
    }
  }


  return (
    <>
      <div>
      <input type ="number" placeholder={"enter min value"} value={minValue} onChange={(e)=> setMinValue(e.target.value)}></input>
      <br></br>
      <input type="number" placeholder={"enter max value"} value={maxValue} onChange={(e)=>setMaxValue(e.target.value)}></input>
      <br></br>
        <button onClick={generaterandomnumber}>
          Generate Random number
        </button>
        <br></br>
        {randomNumber!==null &&(
          <p>Random number between {minValue} and {maxValue} is {randomNumber}</p>
        )}
        </div>
    </>
  )
}



export default App
