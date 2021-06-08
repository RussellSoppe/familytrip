import React from 'react';
import './TravelUIStatusBar.css';
import car from '../../../../images/cars/Flat Classic Car Vectors-01.svg';


class TravelUIStatusBar extends React.Component {
  constructor (props) {
    super (props)

    this.state = {

    }
  }

  travelpercentage=(traveldistance, destinationdistance)=>{
      let percent = traveldistance/destinationdistance*100;
      return percent;
  }


render(){ 

  let playerlocation = this.props.PlayerTravelClass.getPlayerLocation();
  let destinationlocation = this.props.DestinationClass.getDestination().location;

  return (

    <div>

      {/*Car Graphic*/}
      <div className="cardiv" style={{left:"calc(" + this.travelpercentage(playerlocation, destinationlocation) + "vw - 100px)"}}>
          <object className="carobject" type="image/svg+xml" data={car}>Your browser does not support SVGs</object>
      </div>

      {/*Progress Bar*/}
      <div id="myProgress">
        <div id="myBar" style={{width:this.travelpercentage(playerlocation, destinationlocation)+"%"}}></div>
      </div>
      
      <div className="travel-info">
        <div>{`Distance remaining to ${this.props.DestinationClass.getDestination().name}: ${this.props.PlayerTravelClass.getDistanceToDestination()}`}</div>
        <div>{`Travel Speed: ${this.props.PlayerTravelClass.getTravelSpeed()}`}</div>
      </div>
      
    </div>
  );
}}

export default TravelUIStatusBar;
