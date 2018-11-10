import React, { Component } from "react"
import "./App.css"

class KalkuButton extends Component{

    buttonPressed = (ev) => {
        this.props.buttonPressedParent(ev.target.name)
    }

    render(){

        return (
            <div className="buttons">
                <button className="button-clear-del" onClick={ this.buttonPressed } name="clear">CLEAR</button>
                <button className="button-clear-del" onClick={ this.buttonPressed } name="back">DEL</button>
                <button className="button" onClick={ this.buttonPressed } name="7">7</button>
                <button className="button" onClick={ this.buttonPressed } name="8">8</button>
                <button className="button" onClick={ this.buttonPressed } name="9">9</button>
                <button className="button" onClick={ this.buttonPressed } name="/">/</button>
                <button className="button" onClick={ this.buttonPressed } name="4">4</button>
                <button className="button" onClick={ this.buttonPressed } name="5">5</button>
                <button className="button" onClick={ this.buttonPressed } name="6">6</button>
                <button className="button" onClick={ this.buttonPressed } name="*">X</button>
                <button className="button" onClick={ this.buttonPressed } name="1">1</button>
                <button className="button" onClick={ this.buttonPressed } name="2">2</button>
                <button className="button" onClick={ this.buttonPressed } name="3">3</button>
                <button className="button" onClick={ this.buttonPressed } name="-">-</button>
                <button className="button" onClick={ this.buttonPressed } name="0">0</button>
                <button className="button" onClick={ this.buttonPressed } name=".">.</button>
                <button className="button" onClick={ this.buttonPressed } name="=">=</button>
                <button className="button" onClick={ this.buttonPressed } name="+">+</button>
            </div>
        );
    }
}

export default KalkuButton