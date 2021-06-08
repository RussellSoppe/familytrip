import React from 'react';
import './Game.css';
import CurrentLocation from './CurrentLocation/CurrentLocation.js';
import HUD from './HUD/HUD.js';
import Travel from './Travel/Travel.js';
import Inventory from './Inventory/Inventory.js';
import Shop from './Shop/Shop.js';
import EndGame from './EndGame/EndGame.js';


// Assets


// Classes
import EndGameClass from '../../classes/EndGameClass';
import PlayerTravelClass from '../../classes/PlayerTravelClass';



class Game extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
    PlayerTravelClass: new PlayerTravelClass(this.props.Player, this.props.DestinationClass),
    gamescreen: "currentlocation",

    
    }
  }

// Toggles

toggleGameScreen=(screen)=>{
  this.setState({
    gamescreen: screen
  })
}

render(){ 

  switch(this.state.gamescreen){
    case "currentlocation":
      return(
        <div>
        
          <HUD
            Player={this.props.Player}
            DestinationClass={this.props.DestinationClass}
            PlayerTravelClass = {this.state.PlayerTravelClass}

            

            //TravelUIDistance
            destination = {this.state.destination}
            destinationdistance = {this.state.destinationdistance}
              
            getCurrentTravelDistance = {this.getCurrentTravelDistance}
      
          />

          <CurrentLocation
            DestinationClass = {this.props.DestinationClass}
            Player = {this.props.Player}
          />

          <div className="travel-to-button-div">
            <button onClick={()=>this.toggleGameScreen('travel')}>{`Travel to ${this.props.DestinationClass.getDestination().name}`}</button>
          </div>

        </div>
      );
    case "travel":
      return (
        <div>
          <HUD
            Player={this.props.Player}
            DestinationClass={this.props.DestinationClass}
            PlayerTravelClass = {this.state.PlayerTravelClass}

            //TravelUIDistance
            destination = {this.state.destination}
            destinationdistance = {this.state.destinationdistance}
            
            getCurrentTravelDistance = {this.getCurrentTravelDistance}
          />

          
          <Travel
            DestinationClass = {this.props.DestinationClass}
            PlayerTravelClass = {this.state.PlayerTravelClass}
            toggleGameScreen = {this.toggleGameScreen}
          />

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
            toggleendgamestate = {this.state.toggleendgame}
            startNewGame = {this.startNewGame}
          />
        </div>
      );
    default: 
      return(
        <div>Something went wrong, start new game.</div>
      );
  }
  
}}

export default Game;