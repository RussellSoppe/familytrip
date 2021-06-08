import React from 'react';
import './CurrentLocation.css';


class CurrentLocation extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      
    }
  }




render(){ 
  return (

    <div>

        Current Location
        <div className="home-hero-image-container"> 
            <img src={this.props.DestinationClass.getCurrentLocation().imgurl} alt={this.props.DestinationClass.getStartLocation().name}/>
        </div>
        <div> 
            <h2>{this.props.DestinationClass.getCurrentLocation().name}</h2>
            {/*this.props.DestinationClass.getStartLocation().location*/}
        </div>
        <div className="home-resource-display-div">
            <div>Gas: </div>
            {this.props.Player.inventory.getMyGas()} 
        </div>
        <div className="home-resource-display-div">
            <div>Food: </div>
            {this.props.Player.inventory.getMyFood()} 
        </div>
        <div className="home-resource-display-div">
            <div>Barf Bags:  </div>
            {this.props.Player.inventory.getMyBarfBags()} 
        </div>
        <div className="home-resource-display-div">
            <div>Money: </div>
            {this.props.Player.inventory.getMyMoney()} 
        </div>
        

    </div>
  );
}}

export default CurrentLocation;
