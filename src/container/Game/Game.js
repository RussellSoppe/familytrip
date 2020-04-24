import React from 'react';
import HUD from './HUD/HUD.js';
import Travel from './Travel/Travel.js';
import Inventory from './Inventory/Inventory.js';
import Shop from './Shop/Shop.js';
import EndGame from './EndGame/EndGame.js';
// import './player.css';

// Assets


// Classes
import EndGameClass from '../../classes/EndGameClass';



class Game extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
    // Global
    totaltraveldistance: 0,
    
    // Game

    // // HUD

    // // Travel    

    // // Inventory
     toggleinventoryscreen: false,

    // // Shop
     toggleshopscreen: false, 

    // // EndGame
     EndGameClass: new EndGameClass(),
     toggleendgame: false,


    }
  }

getTotalTravelDistance=()=>{
  return this.state.totaltraveldistance;
}

setTotalTravelDistance=(value)=>{
  this.setState({
    totaltraveldistance: value
  })
}

toggleInventoryScreen=()=>{
  
  if(this.state.toggleinventoryscreen){

    this.setState({
      toggleinventoryscreen: false
    })

  }else{
    this.setState({
      toggleinventoryscreen: true
    })
  }
  
}

toggleShopScreen=()=>{
  console.log("toggleShopScreen is here");
  if(this.state.toggleshopscreen){

    this.setState({
      toggleshopscreen: false
    })

  }else{
    this.setState({
      toggleshopscreen: true
    })
  }
  
}


toggleScreenOff=(value)=>{
  switch(value){
    case "toggleinventoryscreen":
      this.setState({
        toggleinventoryscreen: false
      });
      break;
    case "toggleshopscreen":
        this.setState({
        toggleshopscreen: false
      });
      break;
    default:
      this.setState({
        toggleinventoryscreen: false,
        toggleshopscreen: false
      });
  }
}

toggleEndGame=()=>{
  if(this.state.toggleendgame){

    this.setState({
      toggleendgame: false
    });

  }else{

    this.setState({
      toggleendgame: true
    });

  }

}

startNewGame=()=>{
  this.props.onPageChange("Start");
  this.setState({
    toggleendgame: false
  })
}



render(){ 

console.log("Large Log: ", this.props.DestinationClass.getCurrentDestination().imgurl,
this.props.DestinationClass.getNextDestination().name,
this.props.DestinationClass.getCurrentDestination().name,
this.props.DestinationClass.getCurrentDestination().distance);

  // console.log(this.props.DestinationClass.getDistanceBetween(6));
  
  return (

    <div>
      <HUD
        playername={this.props.Player.name}
        totaltraveldistance={this.state.totaltraveldistance}
        DestinationClass={this.props.DestinationClass}

        //TravelUIDistance
        destination = {this.state.destination}
        destinationdistance = {this.state.destinationdistance}
        traveldistance = {this.state.traveldistance}
        travelspeed = {this.state.travelspeed}
      />
      {<Travel
        DestinationClass = {this.props.DestinationClass}
        EndGameClass={this.state.EndGameClass}
        getTotalTravelDistance={this.getTotalTravelDistance}
        setTotalTravelDistance={this.setTotalTravelDistance}
        PlayerInventory={this.props.Player.inventory}
        toggleScreenOff={this.toggleScreenOff}
        toggleShopScreen={this.toggleShopScreen}
        toggleInventoryScreen={this.toggleInventoryScreen}
        toggleEndGame={this.toggleEndGame}
        toggleendgamestate={this.state.toggleendgame}
      />}

      <Inventory
        PlayerInventory={this.props.Player.inventory}
        // temp inventory toggle system
        toggleinventoryscreenstate = {this.state.toggleinventoryscreen}
        toggleInventoryScreen={this.toggleInventoryScreen}
        toggleScreenOff={this.toggleScreenOff}
      />
      <Shop
        toggleshopscreen = {this.state.toggleshopscreen}
        toggleScreenOff={this.toggleScreenOff}
        PlayerInventory={this.props.Player.inventory}
      /> 
      <EndGame
        toggleendgame = {this.state.toggleendgame}
        startNewGame = {this.startNewGame}
      />
    </div>
  );
}}

export default Game;