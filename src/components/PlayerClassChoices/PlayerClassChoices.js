import React from 'react';
import './PlayerClassChoices.css';
import InventoryClass from '../../classes/InventoryClass.js';

// images
import policeicon from '../../images/player class icons/police_icon.png';
import teachericon from '../../images/player class icons/teacher_icon.png';
import softwaredevicon from '../../images/player class icons/software_dev_icon.png';


let playerClassesArray = [
	{classObject:{
		classtype: 'police',
		classtitle: "Police Officer",
		imageurl: policeicon,
		inventory: new InventoryClass(25, 5, 40, 250),
	}},
	{classObject:{
		classtype: 'teacher',
		classtitle: "Teacher",
		imageurl: teachericon,
		inventory: new InventoryClass(10, 10, 15, 300),
	}},
	{classObject:{
		classtype: 'software_engineer',
		classtitle: "Software Engineer",
		imageurl: softwaredevicon,
		inventory: new InventoryClass(12, 2, 12, 800),
	}}
];

// let playerclasschoicesarray = Object.entries(playerClasses);

// console.log(playerclasschoicesarray[0][1].police.classtitle);

// let array = [1, 2, 3];

class PlayerClassChoices extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      cardchoice: 'none',
      playerchoiceon: false
      
    }
  }

	onPlayerClassChoice=(inventory, classtype)=>{
		if(!this.state.playerchoiceon){

			this.props.playerStartingInventory(inventory);
			
			this.setState({
				cardchoice: classtype,
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

		const cards = playerClassesArray.map((value, index)=>{

		let playerchoice = this.displayPlayerChoice(this.state.cardchoice, value.classObject.classtype);


			return(
				<div className="player-class-card" onClick={()=>this.onPlayerClassChoice(value.classObject.inventory, value.classObject.classtype)} key={index}>
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