import React, { Component } from 'react';
import './App.css';

class App extends Component {

	constructor(props){
		super(props);

		this.state = {
			power: true,
			input: "",
		}

		this.handleClick = this.handleClick.bind(this);
		this.handleKey = this.handleKey.bind(this);
	}

	handleClick(){

	}

	handleKey(){

	}

  render() {
    return (
      <div className="App" id="drum-machine">
        <div className="display" id="display">
        	<p>{this.state.input}</p>
        </div>
        <div className="button-container">
        	<button className="drum-pad" onClick={this.handleClick()} id="dp-q">Q
        	<audio src="" className="clip" id="Q" preload="auto"/>
        	</button>
        	<button className="drum-pad" onClick={this.handleClick()} id="dp-w">W
        	<audio src="" className="clip" id="W" preload="auto"/>
        	</button>
        	<button className="drum-pad" onClick={this.handleClick()} id="dp-e">E
        	<audio src="" className="clip" id="E"  preload="auto"/>
        	</button>
        	<button className="drum-pad" onClick={this.handleClick()} id="dp-a">A
        	<audio src="" className="clip" id="A"  preload="auto"/>
        	</button>
        	<button className="drum-pad" onClick={this.handleClick()} id="dp-s">S
        	<audio src="" className="clip" id="S"  preload="auto"/>
        	</button>
        	<button className="drum-pad" onClick={this.handleClick()} id="dp-d">D
        	<audio src="" className="clip" id="D"  preload="auto"/>
        	</button>
        	<button className="drum-pad" onClick={this.handleClick()} id="dp-z">Z
        	<audio src="" className="clip" id="Z"  preload="auto"/>
        	</button>
        	<button className="drum-pad" onClick={this.handleClick()} id="dp-x">X
        	<audio src="" className="clip" id="X"  preload="auto"/>
        	</button>
        	<button className="drum-pad" onClick={this.handleClick()} id="dp-c">C
        	<audio src="" className="clip" id="C"  preload="auto"/>
        	</button>
        </div>
      </div>
    );
  }
}

export default App;
