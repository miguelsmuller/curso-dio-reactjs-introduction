import React from "react"
import ReactDOM from "react-dom"
import Button from "./Button"
import "./style.css"

const element1 = "Elemento 1"
const element2 = <h1>Elemento 2</h1>

function fncDoSomenthing(a, b){
  alert(a+b)
}

const App = () => {
  return (
    <div>
      {element1}
      {element2}
      <Button onClick={() => fncDoSomenthing(6,10)} name="6+10"/>
      <Button onClick={() => fncDoSomenthing(3,7)} name="3+7"/>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)