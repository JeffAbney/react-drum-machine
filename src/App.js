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
			volume: 1.0,
			Q: false,
			W: false,
			E: false,
			A: false,
			S: false,
			D: false,
			Z: false,
			X: false,
			C: false,
		}

		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.handleMouseUp = this.handleMouseUp.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.togglePower = this.togglePower.bind(this);
		this.handleSlide = this.handleSlide.bind(this);

		this.drumKey = {
			Q: "Clap",
			W: "HiHat",
			E: "HiHat0",
			A: "HiHat1",
			S: "HiHat2",
			D: "Kick",
			Z: "LowTom1",
			X: "LowTom2",
			X: "Snare",
		}

		
	}

	componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    document.addEventListener('keyup', this.handleKeyUp);
  }
  	componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
    document.removeEventListener('keyup', this.handleKeyUp);
  }

	handleMouseDown(key){
		if (this.state.power) {
			this.setState({
				input: this.drumKey[key],
				[key]: true,
			});
			document.getElementById(key).volume = this.state.volume;
			document.getElementById(key).pause();
			document.getElementById(key).currentTime =0;
			document.getElementById(key).play();
		} else {
			this.setState({
				input: "Power is off",
			})
		}
	}

	handleMouseUp(event){
		this.setState({
			Q: false,
			W: false,
			E: false,
			A: false,
			S: false,
			D: false,
			Z: false,
			X: false,
			C: false,
		})
	}

	handleKeyPress(event){
		if (this.state.power){
			const keyTest = /[QWEASDZXC]/.test(event.key);
			if (keyTest){
			this.setState({
				input: this.drumKey[event.key],
				[event.key]: true,
			});
			document.getElementById(event.key).pause();
			document.getElementById(event.key).currentTime =0;
			document.getElementById(event.key).play();
			
			} else{ }	
		} else { }
	}
		
	

	togglePower(){

			this.setState({
				power: !this.state.power,
				input: this.state.power ? "Power is off"  : "Power is on",
			});
	}

	handleSlide(event){
		this.setState({
			volume: event.target.value/10,
		});
	}

	handleKeyUp(event){
		this.setState({
			Q: false,
			W: false,
			E: false,
			A: false,
			S: false,
			D: false,
			Z: false,
			X: false,
			C: false,
		})
	}



  render() {

    return (
      <div className="App" id="drum-machine">
      	<div className="header">
      		<button type="button" className="power-btn" onClick={this.togglePower} style={(this.state.power)?{backgroundColor: "#2ec4b6"}:{backgroundColor: "#ff3366"}}>{this.state.power ? "ON" : "OFF"}</button>
        	<div className="display" id="display">
        		<p>{this.state.input}</p>
        	</div>
        </div> 
        <div className="drum-pad-container">
        	<div className={"drum-pad active-" + this.state.Q} onMouseDown={() => {this.handleMouseDown("Q")}} onMouseUp={this.handleMouseUp} id="dp-Q">Q
        		<audio src={clap} className="clip" id="Q" preload="auto" volume={this.state.volume} />
        	</div>
        	<div className={"drum-pad active-" + this.state.W} onMouseDown={() => {this.handleMouseDown("W")}} onMouseUp={this.handleMouseUp} id="dp-W">W
        		<audio src={hiHat} className="clip" id="W" preload="auto" volume="0.1"/>
        	</div>
        	<div className={"drum-pad active-" + this.state.E} onMouseDown={() => {this.handleMouseDown("E")}} onMouseUp={this.handleMouseUp} id="dp-E">E
        		<audio src={hiHat0} className="clip" id="E"  preload="auto"/>
        	</div>
        	<div className={"drum-pad active-" + this.state.A} onMouseDown={() => {this.handleMouseDown("A")}} onMouseUp={this.handleMouseUp} id="dp-A">A
        		<audio src={hiHat1} className="clip" id="A"  preload="auto"/>
        	</div>
        	<div className={"drum-pad active-" + this.state.S} onMouseDown={() => {this.handleMouseDown("S")}} onMouseUp={this.handleMouseUp} id="dp-S">S
        		<audio src={hiHat2} className="clip" id="S"  preload="auto"/>
        	</div>
        	<div className={"drum-pad active-" + this.state.D} onMouseDown={() => {this.handleMouseDown("D")}} onMouseUp={this.handleMouseUp} id="dp-D">D
        		<audio src={kick} className="clip" id="D"  preload="auto"/>
        	</div>
        	<div className={"drum-pad active-" + this.state.Z} onMouseDown={() => {this.handleMouseDown("Z")}} onMouseUp={this.handleMouseUp} id="dp-Z">Z
        		<audio src={lowTom1} className="clip" id="Z"  preload="auto"/>
        	</div>
        	<div className={"drum-pad active-" + this.state.X} onMouseDown={() => {this.handleMouseDown("X")}} onMouseUp={this.handleMouseUp} id="dp-X">X
        		<audio src={lowTom2} className="clip" id="X"  preload="auto"/>
        	</div>
        	<div className={"drum-pad active-" + this.state.C} onMouseDown={() => {this.handleMouseDown("C")}} onMouseUp={this.handleMouseUp} id="dp-C">C
        		<audio src={snare} className="clip" id="C"  preload="auto"/>
        	</div>
        </div>

        <div className="slider-container">
        	<label htmlFor="volume">Volume</label>
    		<input className="slider" type="range" id="start" name="volume" min="0" max="10" onChange={this.handleSlide}/>
    	</div>
      
      </div>
    );
  }
}

export default App;
