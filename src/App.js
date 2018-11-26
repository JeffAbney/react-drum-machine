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
import lineMb from './images/line-mobile.png';
import lineDt from './images/line-dt.png';
import star from './images/Star.png';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      power: true,
      input: "",
      volume: 1.0,
      q: false,
      w: false,
      e: false,
      a: false,
      s: false,
      d: false,
      z: false,
      x: false,
      c: false
    }

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.powerOn = this.powerOn.bind(this);
    this.powerOff = this.powerOff.bind(this);
    this.handleSlide = this.handleSlide.bind(this);
    this.startAnimation = this.startAnimation.bind(this);

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
    document.addEventListener('keyup', this.handleKeyUp);
  }
  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress);
    document.removeEventListener('keyup', this.handleKeyUp);
  }



  startAnimation(key) {
  	document.getElementById('star-' + key).className="star"
    document.getElementById('star-' + key).className="star star-animation";
    setTimeout(function() {
    	document.getElementById('star-' + key).className="star";
    }, 500)
  }


  handleMouseDown(key){
    if (this.state.power) {
      this.startAnimation(key);
      this.setState({
        input: this.drumKey[key],
        [key]: true,
      });
      document.getElementById(key).volume = this.state.volume;
      document.getElementById(key).pause();
      document.getElementById(key).currentTime =0;
      document.getElementById(key).play();
    }
  }

  handleMouseUp(event){
    this.setState({
      q: false,
      w: false,
      e: false,
      a: false,
      s: false,
      d: false,
      z: false,
      x: false,
      c: false
    })
  }

  handleKeyPress(event){
    // Only use letter/number keys
    if (event.key.length > 1) {
      return "Try another key";
    }

    if (this.state.power){
      const keyTest = /[qweasdzxc]/.test(event.key);      
      if (keyTest){
      	this.startAnimation(event.key);
        this.setState({
        input: this.drumKey[event.key],
        [event.key]: true,
        });
      document.getElementById(event.key).pause();
      document.getElementById(event.key).currentTime =0;
      document.getElementById(event.key).play();
      }  
    }
  }
    
  powerOn() {
    this.setState({
      power: true
    });
  }

  powerOff() {
    this.setState({
      power: false
    });
  }

  handleSlide(event){
    this.setState({
      volume: event.target.value/10
    });
  }

  handleKeyUp(event){
    this.setState({
      q: false,
      w: false,
      e: false,
      a: false,
      s: false,
      d: false,
      z: false,
      x: false,
      c: false
    })
  }



  render() {
    return (
      <div className="App" id="drum-machine">
        <div className="header">
          <h1 className="title">drums</h1>
          <div className="button-container">
            <button
              type="button" 
              className="power-btn" 
              onClick={this.powerOn} 
              style={
                (this.state.power) ? 
              	{backgroundColor: "#26ACEB"}
              	:
              	{backgroundColor: "#fff"}
              }>
              on
            </button>
            <button
              type="button" 
              className="power-btn" 
              onClick={this.powerOff} 
              style={
                (this.state.power) ? 
            	{backgroundColor: "#fff"}
            	:
            	{backgroundColor: "#26ACEB"}
              }>
              off
            </button>
          </div>
        </div> 
        <div className="drum-pad-container">
          <div className="star-container">
            <img className='star' id="star-q" src={star} alt=""/>
            <img className='star' id="star-w" src={star} alt=""/>
            <img className='star' id="star-e" src={star} alt=""/>
            <img className='star' id="star-a" src={star} alt=""/>
            <img className='star' id="star-s" src={star} alt=""/>
            <img className='star' id="star-d" src={star} alt=""/>
            <img className='star' id="star-z" src={star} alt=""/>
            <img className='star' id="star-x" src={star} alt=""/>
            <img className='star' id="star-c" src={star} alt=""/>

          </div>
          <div 
            className={"drum-pad active-" + this.state.q} 
            onMouseDown={() => {this.handleMouseDown("q")}} 
            onMouseUp={this.handleMouseUp} 
            id="dp-q">
            Q
            <audio
              src={clap} 
              className="clip" 
              id="q" 
              preload="auto" 
              volume={this.state.volume} 
            />
          </div>
          <div 
            className={"drum-pad active-" + this.state.w} 
            onMouseDown={() => {this.handleMouseDown("w")}} 
            onMouseUp={this.handleMouseUp} 
            id="dp-w">
            W
            <audio 
              src={hiHat} 
              className="clip" 
              id="w" 
              preload="auto" 
              volume="0.1"
            />
          </div>
          <div 
            className={"drum-pad active-" + this.state.e} 
            onMouseDown={() => {this.handleMouseDown("e")}} 
            onMouseUp={this.handleMouseUp} 
            id="dp-e">
            E
            <audio 
              src={hiHat0} 
              className="clip" 
              id="e"  
              preload="auto"
            />
          </div>
          <div 
            className={"drum-pad active-" + this.state.a} 
            onMouseDown={() => {this.handleMouseDown("a")}} 
            onMouseUp={this.handleMouseUp} 
            id="dp-a">
            A
            <audio
              src={hiHat1} 
              className="clip" 
              id="a"
              preload="auto"
            />
          </div>
          <div 
            className={"drum-pad active-" + this.state.s} 
            onMouseDown={() => {this.handleMouseDown("s")}} 
            onMouseUp={this.handleMouseUp} 
            id="dp-s">
            S
            <audio
              src={hiHat2} 
              className="clip" 
              id="s" 
              preload="auto"
            />
          </div>
          <div
            className={"drum-pad active-" + this.state.d} 
            onMouseDown={() => {this.handleMouseDown("d")}} 
            onMouseUp={this.handleMouseUp} 
            id="dp-d">
            D
            <audio 
              src={kick} 
              className="clip" 
              id="d" 
              preload="auto"/>
          </div>
          <div 
            className={"drum-pad active-" + this.state.z} 
            onMouseDown={() => {this.handleMouseDown("z")}} 
            onMouseUp={this.handleMouseUp} 
            id="dp-z">
            Z
            <audio
              src={lowTom1} 
              className="clip"
              id="z"
              preload="auto"
            />
          </div>
          <div 
            className={"drum-pad active-" + this.state.x} 
            onMouseDown={() => {this.handleMouseDown("x")}} 
            onMouseUp={this.handleMouseUp} 
            id="dp-x">
            X
            <audio 
              src={lowTom2} 
              className="clip" 
              id="x"  
              preload="auto"
            />
          </div>
          <div 
            className={"drum-pad active-" + this.state.c} 
            onMouseDown={() => {this.handleMouseDown("c")}} 
            onMouseUp={this.handleMouseUp} 
            id="dp-c">
            C
            <audio 
              src={snare} 
              className="clip" 
              id="c"  
              preload="auto"
            />
          </div>
        </div>
        <div className="slider-container">
          <input 
            className="slider" 
            type="range" 
            id="start" 
            name="volume" 
            min="0" 
            max="10" 
            onChange={this.handleSlide}
          />
        </div>      
      </div>
    );
  }
}

export default App;
