import React from 'react';
import './TravelUIStatusBar.css';
import car from '../../../../../images/cars/Flat Classic Car Vectors-01.svg';


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
  return (

    <div>
      {/*Car Graphic*/}
      <div className="cardiv" style={{left:"calc(" + this.travelpercentage(this.props.traveldistance, this.props.destinationdistance) + "vw - 100px)"}}>
          <object className="carobject" type="image/svg+xml" data={car}>Your browser does not support SVGs</object>
      </div>

      <div id="myProgress">
        <div id="myBar" style={{width:this.travelpercentage(this.props.traveldistance, this.props.destinationdistance)+"%"}}></div>
      </div>
    </div>
  );
}}

export default TravelUIStatusBar;
