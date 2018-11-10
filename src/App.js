import React, { Component } from "react"
import KalkuButton from "./KalkuButton"
import KalkuResult from "./KalkuResult"
import "./App.css"

class App extends Component{

  constructor(){
    super();
    this.state = {
      result: '0'
    }
  }

  buttonPressedParent = (buttonName) => {
    if(buttonName == "="){
      this.onCalculate()
    }else if(buttonName == "clear"){
      this.onClear()
    }else if(buttonName == "back"){
      this.onBack()
    }else{
      if(this.state.result == "0"){
        this.setState({
          result: buttonName
        })
      }else{
        this.setState({
          result: this.state.result + buttonName
        })
      }
    }
  }

  onClear = () => {
    this.setState({
      result: "0"
    })
  }

  onBack = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  onCalculate = () => {
    try{
      this.setState({
        result: eval(this.state.result)
      })
    }catch(e){
      this.setState({
        result: "error"
      })
    }
  }

  render(){
    return (
      <div>
        <div className="App">
          <div className="calc-body">
            <KalkuResult result = { this.state.result }/>
            <KalkuButton buttonPressedParent = { this.buttonPressedParent } />
          </div>
        </div>
      </div>
    );
  }
}

export default App