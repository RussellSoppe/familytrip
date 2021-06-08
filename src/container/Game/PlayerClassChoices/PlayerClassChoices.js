import React from 'react';
import './PlayerClassChoices.css';

//classes
import InventoryClass from '../../../classes/InventoryClass.js';

//data
import playerClassArray from '../../../gamedata/playerclasstypes.js';

class PlayerClassChoices extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      cardchoice: 'none',
      playerchoiceon: false
      
    }
  }

	onPlayerClassChoice=(object)=>{
		if(!this.state.playerchoiceon){

			this.props.playerStartingObject(object);
			
			this.setState({
				cardchoice: object.classtype,
				playerchoiceon: true
			})
		}
	}

	displayPlayerChoice=(choice, classtype)=>{

		if(choice === classtype){
			return true;
		}else{
			return false;
		}
	}

	playerClassChoiceCards=()=>{

		const cards = playerClassArray.map((value, index)=>{

		let playerchoice = this.displayPlayerChoice(this.state.cardchoice, value.classObject.classtype);

			return(
				<div className="player-class-card" onClick={()=>this.onPlayerClassChoice(value.classObject)} key={index}>
					<div className="player-class-card-inner">

						<div className="player-class-card-front">
							<div className="player-class-card-title">{value.classObject.classtitle}</div>
							<img className="player-class-icon-image" src={value.classObject.imageurl} alt=""/>
						</div>

						<div className="player-class-card-back">
							<h3>{value.classObject.classtitle}</h3>
							<p>Gas: {value.classObject.inventory.getMyGas()}</p>
							<p>Food: {value.classObject.inventory.getMyFood()}</p>
							<p>Barf Bags: {value.classObject.inventory.getMyBarfBags()}</p>
							<p>Money: {value.classObject.inventory.getMyMoney()}</p>
						</div>

						<div 
							className={playerchoice ? "player-class-card-front-true" : "player-class-card-front-false"}
							style={this.state.playerchoiceon ? {display:"block"} : {display:"none"}}
						></div>
						
						<div 
							className={playerchoice ? "player-class-card-back-true" : "player-class-card-back-false"}
							style={this.state.playerchoiceon ? {display:"block"} : {display:"none"}}
						></div>

					</div>
				</div>
			);
		})

		return cards;

	} 

	  
	render(){

		return(
			<div className="PlayerClassChoices">
				{this.playerClassChoiceCards()}
			</div>
		);
	}
}

export default PlayerClassChoices;