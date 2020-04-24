import React from 'react';
import './TravelUIDistance.css';


class TravelUIDistance extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      
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
            {this.props.DestinationClass.getCurrentDestination().distance - this.props.traveldistance}
          </div>
      </div>
      <div className="destination-ui-div" >
          <h4>Travel Speed: </h4>
          <div>{this.props.travelspeed} mph</div>
      </div>
    </div>

  );
}}

export default TravelUIDistance;
