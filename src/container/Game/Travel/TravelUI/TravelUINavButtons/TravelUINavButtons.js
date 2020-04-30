import React from 'react';
import './TravelUINavButtons.css';


class TravelUINavButtons extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      
    }
  }

  /*

// bools
        
        currenteventbool = {this.props.currenteventbool}
        destinationbool = {this.props.destinationbool}
        shopbool = {this.props.shopbool}

        

  */

render(){ 
  return (

    <div className="TravelUINavButtons">
      
      {/*Travel Button*/}
      <button 
          className="travelbutton" 
          style={this.props.travelgobuttonbool ? {display:"inline"} : {display:"none"}} 
          onClick={()=>this.props.travelGo()} 
          disabled={this.props.travelgobuttondisable}
      >
        Travel
      </button>

      

      {/*Main Player Stats/Inventory Screen*/}
      <button 
          className="travelbutton" 
          style={this.props.currenteventbool ? {display:"inline"} : {display:"none"}} 
          onClick={()=>this.props.toggleInventoryScreen()}
      >
        Check Inventory
      </button>
      

      {/*Travel To New Location Button*/}
      <button 
          className="travelnewlocationbutton" 
          style={this.props.destinationbool ? {display:"inline"} : {display:"none"}} 
          onClick={()=>this.props.startNewDestination(this.props.destintatonlocation)}
      > 
        Travel To: {this.props.nextlocation}
      </button>
      <button  
          style={this.props.shopbool ? {display:"inline"} : {display:"none"}} 
          onClick={()=>this.props.toggleShopScreen()}
      > 
        Shop
      </button>

    </div>
  );
}}

export default TravelUINavButtons;
