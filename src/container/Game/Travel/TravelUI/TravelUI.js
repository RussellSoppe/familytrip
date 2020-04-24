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
      
    }
  }

render(){

  return (
  	<div>

  		{<TravelUIDistance
  			// From Travel
				traveldistance = {this.props.traveldistance}
  			travelspeed = {this.props.travelspeed}
  			showdestinationpicture={this.props.showdestinationpicture}

  			// From Game
        DestinationClass = {this.props.DestinationClass}
  		/>}

	    <div className="currentevent">{this.props.currentevent}</div>

	    {<TravelUIStatusBar
	    	traveldistance = {this.props.traveldistance}
	    	destinationdistance = {this.props.destinationdistance}
	    />}
			
			{<TravelUINavButtons
				// temporary fix for toggling inventory
				toggleInventoryScreen = {this.props.toggleInventoryScreen}

				currentevent = {this.props.currentevent}
				destintatonlocation = {this.props.destintatonlocation}
				inventorybuttontoggle = {this.props.inventorybuttontoggle}
				newtravelbutton = {this.props.newtravelbutton}
				nextlocation = {this.props.nextlocation} 
				toggleShopScreen = {this.props.toggleShopScreen}
				travelbutton = {this.props.travelbutton}
				travelbuttondisable = {this.props.travelbuttondisable} 
				 
				travelGo = {this.props.travelGo} 
				startNewDestination = {this.props.startNewDestination}
			/>}

    </div>
  );
}}

export default TravelUI;