import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Spinner from './_spinner.jsx';

function RepeatButton(props) {
  return (
    <button 
      aria-label='Play again.' 
      id='repeatButton' 
      onClick={props.onClick}>
    </button>
  );
}

function WinningSound() {
  return (
	  <audio autoplay="autoplay" className="player" preload="false">
	    <source src="https://andyhoffman.codes/random-assets/img/slots/winning_slot.wav" />
	  </audio>  
  );
}

class SlotMachinePage extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      winner: null
	    }
	    this.finishHandler = this.finishHandler.bind(this)
	    this.handleClick = this.handleClick.bind(this);
  	}  

  	handleClick() { 
	    this.setState({ winner: null });
	    this.emptyArray();
	    this._child1.forceUpdateHandler();
	    this._child2.forceUpdateHandler();
	    this._child3.forceUpdateHandler();
	}

 	static loser = [
	    'Not quite', 
	    'Stop gambling', 
	    'Hey, you lost!', 
	    'Ouch! I felt that',      
	    'Don\'t beat yourself up',
	    'There goes the college fund',
	    'I have a cat. You have a loss',
	    'You\'re awesome at losing',
	    'Coding is hard',
	    'Don\'t hate the coder'
  	];

  	static matches = [];

  	finishHandler(value) {
	    SlotMachinePage.matches.push(value);  

	    if (SlotMachinePage.matches.length === 3) {
	      const { winner } = this.state;
	      const first = SlotMachinePage.matches[0];
	      let results = SlotMachinePage.matches.every(match => match === first)
	      this.setState({ winner: results });
	    }
  	}

  	emptyArray() {
	    SlotMachinePage.matches = [];
  	}

  	render() {
	    const { winner } = this.state;
	    const getLoser = () => {       
	      return SlotMachinePage.loser[Math.floor(Math.random()*SlotMachinePage.loser.length)]
	    }
	    let repeatButton = null;
	    let winningSound = null;

	    if (winner !== null) {
	      repeatButton = <RepeatButton onClick={this.handleClick} />
	    }
	    
	    if (winner) {
	      winningSound = <WinningSound />
	    }

	    return (
	      <div className="page_content full_row">
			<div className="container slot_machine">
				<ul className="breadcrumb reset">
					<li><Link to="/">Home</Link></li>
					<li>Game</li>
				</ul>
				
				<h1 className="page_title1">Slot Machine</h1>
				
				<div className="box_type">
			        {winningSound}
			        <h1 style={{ color: 'white'}}>
			          <span>{winner === null ? 'Waiting…' : winner ? '🤑 Pure skill! 🤑' : getLoser()}</span>
			        </h1>

			        <div className={`spinner-container`}>
			          <Spinner onFinish={this.finishHandler} ref={(child) => { this._child1 = child; }} timer="1000" />
			          <Spinner onFinish={this.finishHandler} ref={(child) => { this._child2 = child; }} timer="1400" />
			          <Spinner onFinish={this.finishHandler} ref={(child) => { this._child3 = child; }} timer="2200" />
			          <div className="gradient-fade"></div>
			        </div>
			        {repeatButton}  
			    </div>        
		    </div>        
	      </div>
	    );
  	}
}

export default SlotMachinePage;
