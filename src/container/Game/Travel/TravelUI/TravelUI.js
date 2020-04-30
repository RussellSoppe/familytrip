import React from 'react';
import './TravelUI.css';

// components
import TravelUIStatusBar from './TravelUIStatusBar/TravelUIStatusBar.js';
import TravelUIDistance from './TravelUIDistance/TravelUIDistance.js';
import TravelUINavButtons from './TravelUINavButtons/TravelUINavButtons.js';

class TravelUI extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      // currentdestination: this.props.DestinationClass.getCurrentDestination
    }
  }

render(){


  return (
  	<div>
    

  	   {/*<div>{this.state.distancebetween}</div>
       <div>{this.props.DestinationClass.getCurrentLocation().id}</div>
       <div>{this.props.DestinationClass.getCurrentDestination().id}</div>*/}

      <div className="currentevent">{this.props.getCurrentEventDescription()}</div>

			<TravelUIStatusBar 
        getCurrentTravelDistance = {this.props.getCurrentTravelDistance}
        DestinationClass = {this.props.DestinationClass}
        distancebetween = {this.props.distancebetween}
      />

      <TravelUINavButtons
        travelGo = {this.props.travelGo}

        // toggle methods/functions
        toggleScreenOff={this.props.toggleScreenOff}
        toggleShopScreen={this.props.toggleShopScreen}
        toggleInventoryScreen={this.props.toggleInventoryScreen}
        toggleEndGame={this.props.toggleEndGame}

        // toggle state
        toggleendgamestate={this.props.toggleendgame}

        // bools
        travelgobuttonbool = {this.props.travelgobuttonbool}
        currenteventbool = {this.props.currenteventbool}
        destinationbool = {this.props.destinationbool}
        shopbool = {this.props.shopbool}

        //Used to disable travel button while traveling
        travelgobuttondisable = {this.props.travelgobuttondisable}

      />



    </div>
  );
}}

export default TravelUI;