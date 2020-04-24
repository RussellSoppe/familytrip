import React from 'react';
import './TravelUINavButtons.css';


class TravelUINavButtons extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      
    }
  }

render(){ 
  return (

    <div className="TravelUINavButtons">
      
      {/*Travel Button*/}
      <button 
          className="travelbutton" 
          style={this.props.travelbutton ? {display:"inline"} : {display:"none"}} 
          onClick={()=>this.props.travelGo()} 
          disabled={this.props.travelbuttondisable}
      >
        Travel
      </button>
      

      {/*Main Player Stats/Inventory Screen*/}
      <button 
          className="travelbutton" 
          style={this.props.inventorybuttontoggle ? {display:"inline"} : {display:"none"}} 
          onClick={()=>this.props.toggleInventoryScreen()}
      >
        Check Inventory
      </button>
      

      {/*Travel To New Location Button*/}
      <button 
          className="travelnewlocationbutton" 
          style={this.props.newtravelbutton ? {display:"inline"} : {display:"none"}} 
          onClick={()=>this.props.startNewDestination(this.props.destintatonlocation)}
      > 
        Travel To: {this.props.nextlocation}
      </button>
      <button  
          style={this.props.newtravelbutton ? {display:"inline"} : {display:"none"}} 
          onClick={()=>this.props.toggleShopScreen()}
      > 
        Shop
      </button>

    </div>
  );
}}

export default TravelUINavButtons;
