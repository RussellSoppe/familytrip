import React from 'react';
import './StartScreen.css';

//Containers
import TravelLocationCards from '../Game/TravelLocationCards/TravelLocationCards.js';
import PlayerClassChoices from '../Game/PlayerClassChoices/PlayerClassChoices.js';

//Classes
import InventoryClass from '../../classes/InventoryClass.js';

class StartScreen extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      playername: "",
      current_card_id: 0,
      next_card_id: 1,
      inventory: {},
      classtype: {}
    }
  }

onPlayerNameSelect=(event)=>{
  this.setState({
    playername: event.target.value
  })
}


playerStartingObject=(object)=>{
  this.setState({
    inventory:object.inventory,
    classtype: object
  })
}

render(){ 



  return (

    <div>

      <div className="player-start-ui">
        <div className="player-name-modal">

        <div>
          
          {/*
            <h2>Starting Location: Home</h2>
          <img id="starting-location-img" src={this.props.DestinationClass.getDestination('home').imgurl} alt="The Yellow Brick Road."></img>
          */}
          <h2>Choose your player class below:</h2>

          <PlayerClassChoices
            playerStartingObject = {this.playerStartingObject}
          />

          <h2>Choose Your Starting Location:</h2>

          <TravelLocationCards
            DestinationClass = {this.props.DestinationClass}
            onDestinationChoice = {this.onDestinationChoice}
            cardoverlay = {this.state.cardoverlay}
            destinations ={this.props.DestinationClass.getStartingLocations()}
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
            
            //player speed default is set in Player ClassTravelClass
            this.props.createPlayer(this.state.playername, this.state.inventory, this.state.classtype);
            this.props.onPageChange("Game");

          }}>Start</button>
        </div>
      </div>

    </div>
  );
}}

export default StartScreen;
