import React, { Component } from 'react';
import './App.css';
import clap from './pearl-kit/clap.WAV';
import hiHat from './pearl-kit/pearlkit-hihat.wav';
import hiHat0 from './pearl-kit/pearlkit-hihatO.wav';
import hiHat1 from './pearl-kit/pearlkit-hitom1.wav';
import hiHat2 from './pearl-kit/pearlkit-hitom2.wav';
import kick from './pearl-kit/pearlkit-kick.wav';
import lowTom1 from './pearl-kit/pearlkit-lowtom1.wav';
import lowTom2 from './pearl-kit/pearlkit-lowtom2.wav';
import snare from './pearl-kit/pearlkit-snare1.wav';

class App extends Component {

	constructor(props){
		super(props);

		this.state = {
			power: true,
			input: "",
			sound: "",
		}

		this.handleClick = this.handleClick.bind(this);
		this.handleKey = this.handleKey.bind(this);

	}

	handleClick(key){
		this.setState({
			sound: key,
		});
		document.getElementById(key).play();
	}

	handleKey(){
		
	}

  render() {
    return (
      <div className="App" id="drum-machine">
        <div className="display" id="display">
        	<p>{this.state.input}</p>
        </div>
        <div className="drum-pad-container">
        	<div className="drum-pad" onClick={() => {this.handleClick("Q")}} id="dp-q">Q
        		<audio src={clap} className="clip" id="Q" preload="auto"/>
        	</div>
        	<div className="drum-pad" onClick={() => {this.handleClick("W")}} id="dp-w">W
        		<audio src={hiHat} className="clip" id="W" preload="auto"/>
        	</div>
        	<div className="drum-pad" onClick={() => {this.handleClick("E")}} id="dp-e">E
        		<audio src={hiHat0} className="clip" id="E"  preload="auto"/>
        	</div>
        	<div className="drum-pad" onClick={() => {this.handleClick("A")}} id="dp-a">A
        		<audio src={hiHat1} className="clip" id="A"  preload="auto"/>
        	</div>
        	<div className="drum-pad" onClick={() => {this.handleClick("S")}} id="dp-s">S
        		<audio src={hiHat2} className="clip" id="S"  preload="auto"/>
        	</div>
        	<div className="drum-pad" onClick={() => {this.handleClick("D")}} id="dp-d">D
        		<audio src={kick} className="clip" id="D"  preload="auto"/>
        	</div>
        	<div className="drum-pad" onClick={() => {this.handleClick("Z")}} id="dp-z">Z
        		<audio src={lowTom1} className="clip" id="Z"  preload="auto"/>
        	</div>
        	<div className="drum-pad" onClick={() => {this.handleClick("X")}} id="dp-x">X
        		<audio src={lowTom2} className="clip" id="X"  preload="auto"/>
        	</div>
        	<div className="drum-pad" onClick={() => {this.handleClick("C")}} id="dp-c">C
        		<audio src={snare} className="clip" id="C"  preload="auto"/>
        	</div>
        </div>
      </div>
    );
  }
}

export default App;
