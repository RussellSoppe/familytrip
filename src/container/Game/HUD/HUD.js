import React from 'react'
import './HUD.css';

import TravelUIDistance from '../Travel/TravelUI/TravelUIDistance/TravelUIDistance.js';


class HUD extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      test: false
    }
  }




render(){ 

  return (

    <div>
      <div className="player-hud"> 
        <h2>Player Name: {this.props.playername}</h2>
        <h2>Total Distance Traveled: {this.props.totaltraveldistance}</h2>
      </div>

      <TravelUIDistance
        DestinationClass = {this.props.DestinationClass}
        
        // where to calculate or get below???
        traveldistance = {0}
        travelspeed = {10}
        showdestinationpicture={true}
      />

    </div>
  );
}}

export default HUD;