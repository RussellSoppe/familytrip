import React from 'react'
import './HUD.css';

import TravelUIDistance from '../TravelUI/TravelUIDistance/TravelUIDistance.js';


class HUD extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      totaldistance: this.props.PlayerTravelClass.getPlayerLocation()
    }
  }

componentDidMount() {
  this.timerDistance = setInterval(
    ()=> this.updateDistance(), 500
  );
}

componentWillUnmount() {
  clearInterval(this.timerDistance);
}

updateDistance=()=>{
  this.setState({
    totaldistance: this.props.PlayerTravelClass.getPlayerLocation()
  })
}

render(){ 

  return (
    
    <div>
    
      <div className="player-hud"> 

        <div className="player-hud-profile-container">
          <div className="player-hud-icon-container">
            <img src={this.props.Player.classtype.imageurl} alt=""/>
          </div>

          <div className="player-hud-name">{this.props.Player.name}</div>
        </div>
        
        <h3>Total Distance Traveled: {this.props.PlayerTravelClass.getPlayerLocation()}</h3>
      </div>

    </div>
  );
}}

export default HUD;