import React from 'react';
import './TravelUIDistance.css';


class TravelUIDistance extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      currentlocationkey: this.props.DestinationClass.getCurrentLocation().id,
      currentdestinationkey: this.props.DestinationClass.getCurrentDestination().id,
    }
  }


distanceDisplay=()=>{
  let distancebetween = this.props.DestinationClass.getDistanceBetween(this.state.currentlocationkey, this.state.currentdestinationkey);
  let current = this.props.getCurrentTravelDistance();
  let remaining = distancebetween - current;

  if(remaining > 0){
    
    return remaining;

  }else if (remaining <= 0){
  
    return 0;
  }
}

render(){ 

  return (

    <div>
        <div  className="arrival-image-container" style={this.props.showdestinationpicture ? {display:"block"} : {display:"none"}}>
        <img className="arrival-image" src={this.props.DestinationClass.getCurrentDestination().imgurl} alt="View of destination."></img>
      </div>

      <div  className="destination-ui-div" >
          <h4>Distance To:</h4>
          <div className="destinationtext">
            {this.props.DestinationClass.getCurrentDestination().name}
          </div>
          <div className="distancetonumbertext">
            {this.distanceDisplay()}
          </div>
      </div>
      <div className="destination-ui-div" >
          <h4>Travel Speed: </h4>
          <div>{this.props.getTravelSpeed()} mph</div>
      </div>
    </div>

  );
}}

export default TravelUIDistance;
