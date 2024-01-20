import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)//usestate sends updates in batches to the UI
  
  // let counter = 15

  const addValue = () => {
    setCounter((prevcounter)=> (prevcounter==20?20:prevcounter+1))
    console.log("clicked", counter)
  }

  const removeValue = () => {
    setCounter((prevcounter)=> (prevcounter==0?0:prevcounter-1))
  }

  return (
    <>
     <h1>Let's Count</h1>
     <h2>Counter Value : {counter}</h2>

     <button
     onClick={addValue}>Add Value</button>
     <br />
     <button
     onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
