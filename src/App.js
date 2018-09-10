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
		this.handleKeyPress = this.handleKeyPress.bind(this);

		this.drumKey = {
			q: "Clap",
			w: "hiHat",
			e: "hiHat0",
			a: "hiHat1",
			s: "hiHat2",
			d: "kick",
			z: "lowTom1",
			x: "lowTom2",
			c: "snare",
		}
	}

	componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);
  }
  	componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
  }

	handleClick(key){
		this.setState({
			sound: key,
			input: this.drumKey[key],
		});
		document.getElementById(key).play();
	}

	handleKeyPress(event){
		this.setState({
			sound: event.key,
			input: this.drumKey[event.key],
		});
		document.getElementById(event.key).play();
	}

  render() {

    return (
      <div className="App" id="drum-machine">
        <div className="display" id="display">
        	<p>{this.state.input}</p>
        </div>
        <div className="drum-pad-container">
        	<div className="drum-pad" onClick={() => {this.handleClick("q")}} id="dp-q">Q
        		<audio src={clap} className="clip" id="q" preload="auto"/>
        	</div>
        	<div className="drum-pad" onClick={() => {this.handleClick("w")}} id="dp-w">W
        		<audio src={hiHat} className="clip" id="w" preload="auto"/>
        	</div>
        	<div className="drum-pad" onClick={() => {this.handleClick("e")}} id="dp-e">E
        		<audio src={hiHat0} className="clip" id="e"  preload="auto"/>
        	</div>
        	<div className="drum-pad" onClick={() => {this.handleClick("a")}} id="dp-a">A
        		<audio src={hiHat1} className="clip" id="a"  preload="auto"/>
        	</div>
        	<div className="drum-pad" onClick={() => {this.handleClick("s")}} id="dp-s">S
        		<audio src={hiHat2} className="clip" id="s"  preload="auto"/>
        	</div>
        	<div className="drum-pad" onClick={() => {this.handleClick("d")}} id="dp-d">D
        		<audio src={kick} className="clip" id="d"  preload="auto"/>
        	</div>
        	<div className="drum-pad" onClick={() => {this.handleClick("z")}} id="dp-z">Z
        		<audio src={lowTom1} className="clip" id="z"  preload="auto"/>
        	</div>
        	<div className="drum-pad" onClick={() => {this.handleClick("x")}} id="dp-x">X
        		<audio src={lowTom2} className="clip" id="x"  preload="auto"/>
        	</div>
        	<div className="drum-pad" onClick={() => {this.handleClick("c")}} id="dp-c">C
        		<audio src={snare} className="clip" id="c"  preload="auto"/>
        	</div>
        </div>
      </div>
    );
  }
}

export default App;
