import { useState } from 'react'
import './App.css'



function App() {
  const [color, setColor] = useState("")

  function cycle(){
    if (color === "red"){
      setColor("yellow")
    } if  (color === "yellow"){
      setColor("green")
    } if (color === "green"){
      setColor("red")
    }
    if (color === ""){
      setColor("red")
    }
  }

  return (
    <>
      <body> 
    <div className="traffic-signal"> 
        <div 
        className={"light red " + (color === "red" ? "glow" : "")}
        onClick={() => setColor("red")}
        ></div>

        <div
         className={"light yellow " + (color === "yellow" ? "glow" : "")}
         onClick={() => setColor("yellow")}
         ></div>

        <div className={"light green " + (color === "green" ? "glow" : "")}
        onClick={() => setColor("green")}
        ></div> 
    </div> 
    <button className='resetbtn' onClick={() => setColor("")}>Reset</button>
    <button className='cyclebtn' onClick={() => (cycle())}>Cycle</button>
</body> 
    </>
  )
}

export default App