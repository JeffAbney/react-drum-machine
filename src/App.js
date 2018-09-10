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
			volume: 1.0,
		}

		this.handleClick = this.handleClick.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.togglePower = this.togglePower.bind(this);
		this.handleSlide = this.handleSlide.bind(this);

		this.drumKey = {
			q: "Clap",
			w: "HiHat",
			e: "HiHat0",
			a: "HiHat1",
			s: "HiHat2",
			d: "Kick",
			z: "LowTom1",
			x: "LowTom2",
			c: "Snare",
		}

		
	}

	componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress);

  }
  	componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
  }

	handleClick(key){
		if (this.state.power) {
			this.setState({
				sound: key,
				input: this.drumKey[key],
			});
			document.getElementById(key).volume = this.state.volume;
			document.getElementById(key).play();
		} else {
			this.setState({
				input: "Power is off",
			})
		}
	}

	handleKeyPress(event){
		let keyTest = /[qweasdzxc]/.test(event.key);
		if (keyTest){
		this.setState({
			sound: event.key,
			input: this.drumKey[event.key],
		});
		document.getElementById(event.key).volume = this.state.volume;
		document.getElementById(event.key).play();
		}
		else{ }	
	}

	togglePower(){
		if(!this.state.power){
			this.setState({
				input: "Power is on"
			})
		}
		this.setState({
			power: !this.state.power,
		})
	}

	handleSlide(event){
		this.setState({
			volume: event.target.value/10,
		});
	}



  render() {

    return (
      <div className="App" id="drum-machine">
      	<div className="header">
      		<button type="button" className="power-btn" onClick={this.togglePower} style={(this.state.power)?{backgroundColor: "green"}:{backgroundColor: "red"}}>{this.state.power ? "ON" : "OFF"}</button>
        	<div className="display" id="display">
        		<p>{this.state.input}</p>
        	</div>
        </div> 
        <div className="drum-pad-container">
        	<div className="drum-pad" onClick={() => {this.handleClick("q")}} id="dp-q">Q
        		<audio src={clap} className="clip" id="q" preload="auto" volume="0.1" />
        	</div>
        	<div className="drum-pad" onClick={() => {this.handleClick("w")}} id="dp-w">W
        		<audio src={hiHat} className="clip" id="w" preload="auto" volume="0.1"/>
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

        <label htmlFor="volume">Volume</label>
    	<input type="range" id="start" name="volume" min="0" max="10" onChange={this.handleSlide}/>

      </div>
    );
  }
}

export default App;
