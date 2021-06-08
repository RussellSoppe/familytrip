import React from 'react';
import './TravelUIDistance.css';

//not sure if this container is used any longer 6/8/21


class TravelUIDistance extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      
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
       
     
      <div className="destination-ui-div" >
          <h4>Travel Speed: </h4>
          <div>{this.props.getTravelSpeed()} mph</div>
      </div>
    </div>

  );
}}

export default TravelUIDistance;
