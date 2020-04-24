import React from 'react';
import './StartScreen.css';

import TravelLocationCards from '../../components/TravelLocationCards/travellocationcards.js';

class StartScreen extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      playername: "",
      cardoverlay: true,
      cardoverlaycolor: "red",
      current_card_id: 0,
      next_card_id: 1
    }
  }

onPlayerNameSelect=(event)=>{
  this.setState({
    playername: event.target.value
  })
}

onDestinationChoice=(key)=>{
  this.setState({
    cardoverlay: false  
  })

  this.props.DestinationClass.setCurrentDestination(key);
  this.props.DestinationClass.addDestinationToTrackingArray(key);
  
}



render(){ 



  return (

    <div>

      <div className="player-start-ui">
        <div className="player-name-modal">

        <div>
          
          <h2>Starting Location: Home</h2>
          <img id="starting-location-img" src={this.props.DestinationClass.getDestination('home').imgurl} alt="The Yellow Brick Road."></img>
          
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
            
            this.props.createPlayer(this.state.playername);
            this.props.onPageChange("Game");

          }}>Start</button>
        </div>
      </div>

    </div>
  );
}}

export default StartScreen;
