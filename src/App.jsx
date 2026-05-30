import { useState } from "react"
import 'React'

const App = () => {

  const [num,setFirst]=useState(0)

  function IncreaseNum(){
    setFirst(num+1)

  }

  function DecreaseNum(){
    setFirst(num-1)

  }

  function Increase5(){
    setFirst(num+5)
  }

  const Increase10=()=>{
    setFirst(num+10)
  }
  
  return (
    <div>
    <h1>{num}</h1>
    <button onClick={IncreaseNum}>Increase</button>
    <button onClick={DecreaseNum}>Decrease</button>
    <button onClick={Increase5}>Increase 5</button>
    <button onClick={Increase10}>Increase 10</button>
    </div>
  )
}

export default App
