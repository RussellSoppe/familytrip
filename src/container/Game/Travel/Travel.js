import React from 'react';
import './Travel.css';

import TravelUIStatusBar from '../TravelUI/TravelUIStatusBar/TravelUIStatusBar.js';
import TravelLocationCards from '../TravelLocationCards/TravelLocationCards.js';

import badevents from '../../../gamedata/badevents.js';

class Travel extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      update: false, 
      continuebutton: false,
      arrivaldisplay: false
    }
  }

updateDom=()=>{
  if(this.state.update){
    this.setState({
      update:false
    })
  }else{
    this.setState({
      update: true
    })
  }
}

toggleArrivalDisplay=(bool)=>{
  this.setState({
    arrivaldisplay: bool
  })
}

toggleContinueButton=(bool)=>{
  this.setState({
    continuebutton: bool
  })
}

render(){ 
  
  return (

    <div>
      
      <div className="current-event-description">{this.props.PlayerTravelClass.getCurrentEventDescription()}</div>
      
      <div className="arrival-image-container" style={this.state.arrivaldisplay ? {display:"block"} : {display:"none"}}>
        <img className="arrival-image" src={this.props.DestinationClass.getDestination().imgurl} alt="View of destination."/>
      </div>

      <div style={this.state.arrivaldisplay ? {display:"block"} : {display:"none"}}>
        <TravelLocationCards
          DestinationClass = {this.props.DestinationClass}
          onDestinationChoice = {this.onDestinationChoice}
          cardoverlay = {this.state.cardoverlay}
          destinations ={this.props.DestinationClass.getDestination().next_leg}
        />
      <button onClick={()=>this.props.toggleGameScreen('currentlocation')}>See Destination Choice</button>  
      </div>
      <TravelUIStatusBar 
        DestinationClass = {this.props.DestinationClass}
        PlayerTravelClass = {this.props.PlayerTravelClass}
      />

      {/*Travel Button*/}
      <div className="continue-travel-button-div">
        <button
        className="continue-travel-button" 
        onClick={()=>{
          this.toggleContinueButton(true);
          this.props.PlayerTravelClass.travelLoop(this.updateDom, this.toggleContinueButton, this.toggleArrivalDisplay)}}
        disabled={this.state.continuebutton}
        >
          Continue
        </button>

      </div>

    </div>

  );
}}

export default Travel;
