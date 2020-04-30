import React from 'react';
import './StartScreen.css';

import TravelLocationCards from '../../components/TravelLocationCards/TravelLocationCards.js';
import PlayerClassChoices from '../../components/PlayerClassChoices/PlayerClassChoices.js';

import InventoryClass from '../../classes/InventoryClass.js';

class StartScreen extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      playername: "",
      current_card_id: 0,
      next_card_id: 1,
      inventory: {}
    }
  }

onPlayerNameSelect=(event)=>{
  this.setState({
    playername: event.target.value
  })
}


playerStartingInventory=(inventory)=>{
  this.setState({
    inventory:inventory
  })
}

render(){ 



  return (

    <div>

      <div className="player-start-ui">
        <div className="player-name-modal">

        <div>
          
          <h2>Starting Location: Home</h2>
          <img id="starting-location-img" src={this.props.DestinationClass.getDestination('home').imgurl} alt="The Yellow Brick Road."></img>
          
          <h2>Choose your player class below:</h2>

          <PlayerClassChoices
            playerStartingInventory = {this.playerStartingInventory}
          />

          <h2>Choose Your First Destination Below:</h2>

          <TravelLocationCards
            DestinationClass = {this.props.DestinationClass}
            onDestinationChoice = {this.onDestinationChoice}
            cardoverlay = {this.state.cardoverlay}
          />

        </div>


          <h2>Player Name: 
            <input 
              className="player-name-input" 
              type="text" 
              onChange={(event)=>this.onPlayerNameSelect(event)}
            />
          </h2>
          <button className="start-button" onClick={()=>{
            
            this.props.createPlayer(this.state.playername, this.state.inventory);
            this.props.onPageChange("Game");

          }}>Start</button>
        </div>
      </div>

    </div>
  );
}}

export default StartScreen;
